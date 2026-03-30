/**
 * Daily Revenue Report — Menu.gs
 * Handles: Menu creation, UI dialogs, Configuration, Triggers, Control helpers
 * Companion file: DailyReport.gs (data processing & email)
 */

/* ---------- Constants ---------- */
const PROP = PropertiesService.getDocumentProperties();
const TZ = Session.getScriptTimeZone ? Session.getScriptTimeZone() : "GMT";
const MAX_ROWS_LIMIT = 50000;
const LOG_PREFIX = '[DRR]';
const VERSION = '2.0';

/* ======================================== ERROR LOGGING ======================================== */

function logError(context, error, details = {}) {
  const timestamp = new Date().toISOString();
  const logEntry = `${LOG_PREFIX} ${timestamp} - ${context}\nError: ${error}\nDetails: ${JSON.stringify(details)}`;
  Logger.log(logEntry);
  console.error(logEntry);
  try {
    PROP.setProperty('DRR_LAST_ERROR', JSON.stringify({ timestamp, context, error: error.toString(), details }));
  } catch (e) { Logger.log('Failed to store error: ' + e); }
}

function logInfo(message) { Logger.log(`${LOG_PREFIX} ${message}`); }
function clearLastError() { try { PROP.deleteProperty('DRR_LAST_ERROR'); } catch (e) {} }

function getLastError() {
  try { const raw = PROP.getProperty('DRR_LAST_ERROR'); return raw ? JSON.parse(raw) : null; }
  catch (e) { return null; }
}

function getSystemStatus() {
  const config = getConfig();
  const lastError = getLastError();
  const triggers = ScriptApp.getProjectTriggers().filter(t => t.getHandlerFunction() === 'triggerSendDailyReport');
  return {
    version: VERSION,
    configured: !!(config && config.sheetName),
    timezone: TZ,
    activeTriggers: triggers.length,
    lastError,
    recipients: config ? (config.recipients || []).length : 0
  };
}

/* ======================================== MENU & UI ======================================== */

function onOpen() {
  try {
    SpreadsheetApp.getUi()
      .createMenu('☀️ Daily Revenue Report')
      .addItem('⚙️ Setup / Control Panel', 'openDailyRevenueReport')
      .addSeparator()
      .addItem('📊 View Charts', 'openChartsDialog')
      .addItem('📧 Send Test Email', 'sendTestFromMenu')
      .addItem('🔍 System Status', 'showSystemStatus')
      .addItem('🔄 Reset Configuration', 'confirmReset')
      .addToUi();
    logInfo('Menu loaded successfully');
  } catch (e) { logError('onOpen', e); }
}

function openDailyRevenueReport() {
  try {
    const config = getConfig();
    if (!config || !config.sheetName) showSetup(); else showControl();
  } catch (e) { logError('openDailyRevenueReport', e); SpreadsheetApp.getUi().alert('Error opening panel: ' + e.message); }
}

function showSetup() {
  try {
    const html = HtmlService.createHtmlOutputFromFile('DailySetup').setWidth(750).setHeight(700);
    SpreadsheetApp.getUi().showModalDialog(html, '⚙️ Daily Revenue Report — Setup');
  } catch (e) { logError('showSetup', e); throw e; }
}

function showControl() {
  try {
    const html = HtmlService.createHtmlOutputFromFile('DailyControl').setWidth(750).setHeight(650);
    SpreadsheetApp.getUi().showModalDialog(html, '🎛️ Daily Revenue Report — Control Panel');
  } catch (e) { logError('showControl', e); throw e; }
}

function openChartsDialog() {
  try {
    const html = HtmlService.createHtmlOutputFromFile('DailyCharts').setWidth(1000).setHeight(700);
    SpreadsheetApp.getUi().showModalDialog(html, '📊 Daily Revenue Charts');
  } catch (e) { logError('openChartsDialog', e); SpreadsheetApp.getUi().alert('Error opening charts: ' + e.message); }
}

function showSystemStatus() {
  try {
    const status = getSystemStatus();
    const lastError = status.lastError;
    let message = `📊 Daily Revenue Report - System Status\n\nVersion: ${status.version}\nConfigured: ${status.configured ? '✅ Yes' : '❌ No'}\nTimezone: ${status.timezone}\nActive Triggers: ${status.activeTriggers}\nRecipients: ${status.recipients}\n\n`;
    if (lastError) { message += `⚠️ Last Error:\nTime: ${lastError.timestamp}\nContext: ${lastError.context}\nError: ${lastError.error}\n`; }
    else { message += `✅ No recent errors`; }
    SpreadsheetApp.getUi().alert(message);
  } catch (e) { logError('showSystemStatus', e); SpreadsheetApp.getUi().alert('Error fetching status: ' + e.message); }
}

function confirmReset() {
  const ui = SpreadsheetApp.getUi();
  const response = ui.alert('Reset Configuration?', '⚠️ This will delete all settings and stop automation. Continue?', ui.ButtonSet.YES_NO);
  if (response == ui.Button.YES) resetConfiguration();
}

function resetConfiguration() {
  try {
    deleteAllTriggers();
    PROP.deleteProperty('DRR_CONFIG');
    clearLastError();
    logInfo('Configuration reset successfully');
    SpreadsheetApp.getUi().alert('✅ Configuration reset complete.');
  } catch (e) { logError('resetConfiguration', e); SpreadsheetApp.getUi().alert('Error during reset: ' + e.message); }
}

function sendTestFromMenu() {
  try {
    const result = sendTestReportNow();
    SpreadsheetApp.getUi().alert(result.success ? '✅ Test email sent successfully!' : '❌ ' + (result.message || 'Failed to send test email'));
  } catch (e) { logError('sendTestFromMenu', e); SpreadsheetApp.getUi().alert('Error: ' + e.message); }
}

/* ======================================== CONFIGURATION ======================================== */

function saveConfig(config) {
  try {
    if (!config || !config.sheetName) throw new Error('Sheet name is required');
    if (!config.revenueCol) throw new Error('Revenue column is required');
    if (!config.productCol) throw new Error('Product column is required');
    if (!config.dateCol) throw new Error('Date column is required');

    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName(config.sheetName);
    if (!sheet) throw new Error(`Sheet "${config.sheetName}" not found. Check spelling.`);

    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    const headerStrings = headers.map(h => (h || '').toString().trim());
    const missingCols = [];
    if (!headerStrings.includes(config.revenueCol)) missingCols.push(config.revenueCol);
    if (!headerStrings.includes(config.productCol)) missingCols.push(config.productCol);
    if (!headerStrings.includes(config.dateCol)) missingCols.push(config.dateCol);
    if (config.orderCol && !headerStrings.includes(config.orderCol)) missingCols.push(config.orderCol);
    if (config.refundCol && config.refundCol.toLowerCase() !== 'no' && !headerStrings.includes(config.refundCol)) missingCols.push(config.refundCol);
    if (missingCols.length > 0) throw new Error(`Column(s) not found in sheet: ${missingCols.join(', ')}`);

    if (!config.recipients || config.recipients.length === 0) throw new Error('At least one recipient is required');
    for (const r of config.recipients) {
      if (!r.email || !r.email.includes('@')) throw new Error(`Invalid email: ${r.email || '(empty)'}`);
      if (r.hour === undefined || r.hour < 0 || r.hour > 23) throw new Error(`Invalid hour for ${r.email}: ${r.hour}`);
    }

    PROP.setProperty('DRR_CONFIG', JSON.stringify(config));
    logInfo('Configuration saved successfully');
    deleteAllTriggers();
    scheduleTriggersForRecipients(config.recipients || []);
    clearLastError();
    return { success: true, message: `✅ Configuration saved! ${config.recipients.length} recipient(s), ${ScriptApp.getProjectTriggers().length} trigger(s) scheduled.` };
  } catch (e) { logError('saveConfig', e, { config }); return { success: false, message: e.message }; }
}

function getConfig() {
  try { const raw = PROP.getProperty('DRR_CONFIG'); return raw ? JSON.parse(raw) : null; }
  catch (e) { logError('getConfig', e); return null; }
}

/* ======================================== TRIGGERS ======================================== */

function scheduleTriggersForRecipients(recipients) {
  if (!recipients || recipients.length === 0) { logInfo('No recipients to schedule'); return; }
  try {
    const timeGroups = {};
    recipients.forEach(r => { const key = `${r.hour}:${r.minute || 0}`; if (!timeGroups[key]) timeGroups[key] = []; timeGroups[key].push(r.email); });
    Object.entries(timeGroups).forEach(([time, emails]) => {
      const [hour, minute] = time.split(':').map(Number);
      try {
        ScriptApp.newTrigger('triggerSendDailyReport').timeBased().everyDays(1).atHour(hour).nearMinute(minute).create();
        logInfo(`Trigger created for ${hour}:${minute} (${emails.length} recipients)`);
      } catch (e) { logError('scheduleTriggersForRecipients', e, { hour, minute, emails }); }
    });
  } catch (e) { logError('scheduleTriggersForRecipients', e); }
}

function deleteAllTriggers() {
  try {
    const triggers = ScriptApp.getProjectTriggers();
    let deleted = 0;
    triggers.forEach(t => { try { if (t.getHandlerFunction() === 'triggerSendDailyReport') { ScriptApp.deleteTrigger(t); deleted++; } } catch (e) { logError('deleteAllTriggers', e); } });
    logInfo(`Deleted ${deleted} trigger(s)`);
  } catch (e) { logError('deleteAllTriggers', e); }
}

/* ======================================== CONTROL ======================================== */

function stopAutomation() {
  try { deleteAllTriggers(); logInfo('Automation stopped by user'); return { success: true, message: 'Automation stopped successfully' }; }
  catch (e) { logError('stopAutomation', e); return { success: false, message: e.message }; }
}

/* ======================================== CLIENT HELPERS ======================================== */

function getConfigForClient() { try { return getConfig() || {}; } catch (e) { return {}; } }
function getStatusForClient() { try { return getSystemStatus(); } catch (e) { return { error: e.message }; } }
