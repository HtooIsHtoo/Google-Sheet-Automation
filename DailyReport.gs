/**
 * Daily Revenue Report — DailyReport.gs
 * Handles: Report generation, sheet data, metrics, chart data, email building, utilities
 * Companion file: Menu.gs (UI, menu, config, triggers)
 *
 * Returns/refunds are excluded from orders & revenue totals.
 * A "return row" is identified by config.returnValue matching the refund column cell.
 */

/* ======================================== DATES ======================================== */

function getDateInTimezone(daysAgo = 0) {
  try {
    const now = new Date();
    const tzDate = new Date(Utilities.formatDate(now, TZ, 'yyyy-MM-dd'));
    tzDate.setDate(tzDate.getDate() - daysAgo);
    return tzDate;
  } catch (e) {
    logError('getDateInTimezone', e, { daysAgo });
    const d = new Date(); d.setDate(d.getDate() - daysAgo); d.setHours(0, 0, 0, 0); return d;
  }
}

function normalizeDate(dateValue) {
  if (!dateValue) return null;
  try {
    const d = dateValue instanceof Date ? dateValue : new Date(dateValue);
    if (isNaN(d.getTime())) return null;
    return new Date(d.getFullYear(), d.getMonth(), d.getDate());
  } catch (e) { logError('normalizeDate', e, { dateValue }); return null; }
}

/* ======================================== TRIGGER HANDLER ======================================== */

function triggerSendDailyReport() {
  try {
    logInfo('Daily trigger fired');
    const config = getConfig();
    if (!config) { logError('triggerSendDailyReport', 'No configuration found'); return; }
    sendReportToAll(config, false);
    logInfo('Daily report sent successfully');
  } catch (e) { logError('triggerSendDailyReport', e); }
}

/* ======================================== TEST / SEND ======================================== */

function sendTestReportNow() {
  try {
    const config = getConfig();
    if (!config) return { success: false, message: 'No configuration found. Please run setup first.' };
    sendReportToAll(config, true);
    logInfo('Test report sent');
    return { success: true, message: 'Test email sent successfully!' };
  } catch (e) { logError('sendTestReportNow', e); return { success: false, message: e.message }; }
}

/* ======================================== REPORT GENERATION ======================================== */

function sendReportToAll(config, isTest) {
  const recipients = config.recipients || [];
  if (recipients.length === 0) throw new Error('No recipients configured');
  try {
    const reportDate = getDateInTimezone(1);
    const compareDate = getDateInTimezone(2);
    logInfo(`Generating report for ${formatDate(reportDate)} vs ${formatDate(compareDate)}`);
    const report = buildReportForDates(config, reportDate, compareDate);
    if (!report || report.error) throw new Error(report.error || 'Failed to build report');
    let successCount = 0, failCount = 0;
    recipients.forEach(rec => {
      try {
        const subject = (isTest ? '🧪 TEST: ' : '📊 ') + 'Daily Revenue Report — ' + formatDate(reportDate);
        const htmlBody = buildEmailHtml(config, report, rec, isTest);
        MailApp.sendEmail({ to: rec.email, subject, htmlBody });
        successCount++;
        logInfo(`Email sent to ${rec.email}`);
      } catch (e) { failCount++; logError('sendReportToAll - individual email', e, { email: rec.email }); }
    });
    logInfo(`Report complete: ${successCount} sent, ${failCount} failed`);
    if (failCount > 0 && successCount === 0) throw new Error('All emails failed to send');
  } catch (e) { logError('sendReportToAll', e); throw e; }
}

function buildReportForDates(config, dateA, dateB) {
  try {
    const values = getSheetData(config.sheetName);
    if (!values || values.length < 2) {
      return { error: 'Sheet is empty or has no data rows', date: dateA, compareDate: dateB, metricsA: getEmptyMetrics(), metricsB: getEmptyMetrics(), revenueChangePct: 0, ordersChangePct: 0, chartData: getEmptyChartData() };
    }
    const parsed = parseSheetData(values, config);
    if (parsed.error) return { error: parsed.error };

    const rowsA = filterRowsByDate(parsed.rows, parsed.colIndex.date, dateA);
    const rowsB = filterRowsByDate(parsed.rows, parsed.colIndex.date, dateB);
    logInfo(`Date A: ${rowsA.length} rows, Date B: ${rowsB.length} rows`);

    const metricsA = computeMetrics(rowsA, parsed, config);
    const metricsB = computeMetrics(rowsB, parsed, config);

    const revenueChangePct = percentChange(metricsB.totalRevenue, metricsA.totalRevenue);
    const ordersChangePct = percentChange(metricsB.totalOrders, metricsA.totalOrders);
    const chartData = generateChartDataForCharts(metricsA.byProduct, metricsB.byProduct);

    return { date: dateA, compareDate: dateB, metricsA, metricsB, revenueChangePct, ordersChangePct, chartData, dataQuality: { rowsA: rowsA.length, rowsB: rowsB.length, totalRows: parsed.rows.length } };
  } catch (e) { logError('buildReportForDates', e); return { error: e.message }; }
}

/* ======================================== SHEET DATA ======================================== */

function getSheetData(sheetName) {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName(sheetName);
    if (!sheet) throw new Error(`Sheet "${sheetName}" not found`);
    const lastRow = sheet.getLastRow(), lastCol = sheet.getLastColumn();
    if (lastRow < 1 || lastCol < 1) throw new Error('Sheet appears to be empty');
    if (lastRow > MAX_ROWS_LIMIT) logError('getSheetData', `Sheet has ${lastRow} rows, exceeding limit of ${MAX_ROWS_LIMIT}`);
    const values = sheet.getRange(1, 1, lastRow, lastCol).getValues();
    logInfo(`Loaded ${values.length} rows, ${lastCol} columns from "${sheetName}"`);
    return values;
  } catch (e) { logError('getSheetData', e, { sheetName }); throw e; }
}

function parseSheetData(values, config) {
  try {
    if (!values || values.length === 0) return { error: 'No data in sheet' };
    const header = values[0].map(h => (h || '').toString().trim());
    if (header.length === 0 || header.every(h => !h)) return { error: 'Header row is empty' };
    const rows = values.slice(1).map(r => r.map(c => (c === '' ? null : c)));
    const colIndex = {};
    colIndex.order = config.orderCol ? header.indexOf(config.orderCol) : -1;
    colIndex.revenue = header.indexOf(config.revenueCol);
    colIndex.product = header.indexOf(config.productCol);
    colIndex.date = header.indexOf(config.dateCol);
    colIndex.refund = (config.refundCol && config.refundCol.toLowerCase() !== 'no') ? header.indexOf(config.refundCol) : -1;
    if (colIndex.revenue < 0) return { error: `Revenue column "${config.revenueCol}" not found in header` };
    if (colIndex.product < 0) return { error: `Product column "${config.productCol}" not found in header` };
    if (colIndex.date < 0) return { error: `Date column "${config.dateCol}" not found in header` };
    return { header, rows, colIndex };
  } catch (e) { logError('parseSheetData', e); return { error: e.message }; }
}

function filterRowsByDate(rows, dateColIndex, dateObj) {
  if (dateColIndex < 0) { logError('filterRowsByDate', 'Invalid date column index', { dateColIndex }); return []; }
  if (!rows || rows.length === 0) return [];
  const targetTime = normalizeDate(dateObj).getTime();
  return rows.filter(r => {
    try {
      const cell = r[dateColIndex];
      if (!cell) return false;
      const normalized = normalizeDate(cell);
      if (!normalized) return false;
      return normalized.getTime() === targetTime;
    } catch (e) { return false; }
  });
}

/**
 * Returns true if this row represents a return/refund transaction.
 * Uses config.returnValue to match the refund column cell value.
 */
function isReturnRow(row, colIndex, config) {
  if (colIndex.refund < 0 || !config.returnValue) return false;
  const cellVal = (row[colIndex.refund] || '').toString().trim().toLowerCase();
  const returnVal = config.returnValue.toString().trim().toLowerCase();
  return cellVal === returnVal;
}

function computeMetrics(rows, parsed, config) {
  const idx = parsed.colIndex;
  let totalRevenue = 0, totalOrders = 0, totalRefundAmount = 0, totalReturnCount = 0;
  const byProduct = {}, byReturnProduct = {};
  let invalidRows = 0;

  rows.forEach((r, i) => {
    try {
      const revenueCell = idx.revenue >= 0 ? r[idx.revenue] : 0;
      const productCell = idx.product >= 0 ? r[idx.product] : 'Unspecified';
      const revenue = parseFloatSafe(revenueCell);
      if (isNaN(revenue)) { invalidRows++; return; }
      const key = (productCell || 'Unspecified').toString();

      if (isReturnRow(r, idx, config)) {
        // Return row: do NOT count in orders or revenue
        totalReturnCount += 1;
        totalRefundAmount += Math.abs(revenue);
        if (!byReturnProduct[key]) byReturnProduct[key] = { amount: 0, count: 0 };
        byReturnProduct[key].amount += Math.abs(revenue);
        byReturnProduct[key].count += 1;
      } else {
        // Normal sale
        totalOrders += 1;
        totalRevenue += revenue;
        if (!byProduct[key]) byProduct[key] = { revenue: 0, orders: 0 };
        byProduct[key].revenue += revenue;
        byProduct[key].orders += 1;
      }
    } catch (e) { invalidRows++; logError('computeMetrics - row error', e, { rowIndex: i }); }
  });

  if (invalidRows > 0) logInfo(`computeMetrics: ${invalidRows} invalid rows skipped`);

  const aov = totalOrders > 0 ? totalRevenue / totalOrders : 0;
  const netLeftRevenue = totalRevenue - totalRefundAmount;

  return { totalRevenue, totalOrders, aov, totalRefundAmount, totalReturnCount, netLeftRevenue, byProduct, byReturnProduct, invalidRows };
}

function getEmptyMetrics() {
  return { totalRevenue: 0, totalOrders: 0, aov: 0, totalRefundAmount: 0, totalReturnCount: 0, netLeftRevenue: 0, byProduct: {}, byReturnProduct: {}, invalidRows: 0 };
}

/* ======================================== CHART DATA ======================================== */

function generateChartDataForCharts(breakdownA, breakdownB) {
  try {
    const pieRevenue = [['Product', 'Revenue']];
    const pieOrders = [['Product', 'Orders']];
    const products = Array.from(new Set([...Object.keys(breakdownA || {}), ...Object.keys(breakdownB || {})]));
    products.forEach(p => {
      pieRevenue.push([p, (breakdownA[p] && breakdownA[p].revenue) || 0]);
      pieOrders.push([p, (breakdownA[p] && breakdownA[p].orders) || 0]);
    });
    const revenueCompare = [['Product', 'Yesterday', 'Day Before']];
    const ordersCompare = [['Product', 'Yesterday', 'Day Before']];
    products.forEach(p => {
      revenueCompare.push([p, (breakdownA[p] && breakdownA[p].revenue) || 0, (breakdownB[p] && breakdownB[p].revenue) || 0]);
      ordersCompare.push([p, (breakdownA[p] && breakdownA[p].orders) || 0, (breakdownB[p] && breakdownB[p].orders) || 0]);
    });
    return { pieRevenue, pieOrders, revenueCompare, ordersCompare };
  } catch (e) { logError('generateChartDataForCharts', e); return getEmptyChartData(); }
}

function getEmptyChartData() {
  return { pieRevenue: [['Product', 'Revenue']], pieOrders: [['Product', 'Orders']], revenueCompare: [['Product', 'Yesterday', 'Day Before']], ordersCompare: [['Product', 'Yesterday', 'Day Before']] };
}

/* ======================================== EMAIL ======================================== */

function buildEmailHtml(config, report, recipient, isTest) {
  try {
    const template = HtmlService.createTemplateFromFile('DailyEmailTemplate');
    template.config = config;
    template.report = report;
    template.recipient = recipient;
    template.isTest = isTest;
    template.formatDate = formatDate;
    template.numberWithCommas = numberWithCommas;
    template.createChartsLink = createChartsLink;
    return template.evaluate().getContent();
  } catch (e) { logError('buildEmailHtml', e); throw e; }
}

/* ======================================== UTILITIES ======================================== */

function parseFloatSafe(v) {
  if (v === null || v === undefined || v === '') return 0;
  if (typeof v === 'number') return isNaN(v) ? 0 : v;
  const cleaned = String(v).replace(/[$,€£¥]/g, '').trim();
  const n = parseFloat(cleaned);
  return isNaN(n) ? 0 : n;
}

function percentChange(oldVal, newVal) {
  if (oldVal === 0 && newVal === 0) return 0;
  if (oldVal === 0) return newVal > 0 ? 100 : -100;
  return ((newVal - oldVal) / Math.abs(oldVal)) * 100;
}

function formatDate(d) {
  try { return Utilities.formatDate(d, TZ, 'yyyy-MM-dd'); }
  catch (e) { return d.toISOString().split('T')[0]; }
}

function numberWithCommas(n) {
  if (n === null || n === undefined) return '0';
  return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function createChartsLink(report) {
  try { return SpreadsheetApp.getActiveSpreadsheet().getUrl(); }
  catch (e) { return '#'; }
}

/* ======================================== CLIENT HELPERS ======================================== */

function getLatestChartData() {
  try {
    const config = getConfig();
    if (!config) return { error: 'No configuration found' };
    const dateA = getDateInTimezone(1), dateB = getDateInTimezone(2);
    const report = buildReportForDates(config, dateA, dateB);
    if (report.error) return { error: report.error };
    return report.chartData;
  } catch (e) { logError('getLatestChartData', e); return { error: e.message }; }
}
