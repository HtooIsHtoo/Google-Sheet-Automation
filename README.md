# 🚀 Daily Revenue Report

**Google Sheets Automation**

*Stop guessing your numbers every day.*

<br>

You open your spreadsheet...

Rows everywhere. Numbers everywhere.

*But one simple question stays unanswered:*

> **"Did my business actually grow today?"**

<br>

That's not analysis.

That's busywork — and it's **slowing you down.**

<br>

---

## 📬 What if your report was already waiting for you?

Imagine waking up... opening your email... and instantly knowing:

<br>

| | |
|----------------------|----------------------|
| • 💰 **How much you made yesterday** | **No spreadsheets.** |
| • 🏆 **What products performed best** | **No calculations.** |
| • 📈 **Whether you're growing or dropping** | **No stress.** |

<br>

> 💡 In one sentence: Turns your messy spreadsheet into a clean, automated daily revenue report sent straight to your inbox.

<br>

---

## ⚡ Why people love this

<br>

| **You STOP:** | **You START getting:** |
|---------------|------------------------|
| • Checking spreadsheets manually | • 📊 Daily revenue & orders |
| • Missing important trends | • 📉 Growth vs yesterday |
| • Wasting time on calculations | • 🧾 Full product breakdown |
| • Making decisions in the dark | • 📧 Clean professional emails |
| | • 🧠 Data for real decisions |

<br>

**This isn't just data. It shows you:**

<br>

| **📈 What's growing** | **📉 What's dropping** | **⚠️ What needs attention** | **✅ How you compare** |
|:---------------------:|:----------------------:|:--------------------------:|:---------------------:|
| | | | |

<br>

*So you can make smarter decisions faster — every single day.*

<br>

---

## ⚙️ What you get

A complete automation system — everything included:

<br>

| | |
|-|-|
| • 🗂️ **Menu.gs** — control panel & setup | • 🎛️ **DailyControl.html** — test, edit, stop anytime |
| • ⚙️ **DailyReport.gs** — data processing engine | • 📈 **DailyCharts.html** — interactive charts |
| • 🖥️ **DailySetup.html** — easy config UI | • 📧 **DailyEmailTemplate.html** — HTML email template |

<br>

> **Everything is ready. Just add and run.**

<br>

---

## 📊 What's inside your daily report

<br>

| **Metric** | **What it tells you** |
|------------|------------------------|
| **💰 Total Revenue** | Net + gross, after returns are subtracted |
| **📦 Total Orders** | Real sales only — returns excluded automatically |
| **📊 Average Order Value** | AOV per non-return transaction |
| **📈 Day-over-Day %** | How yesterday compares to the day before |
| **🏷️ Product Breakdown** | Revenue & orders per product or category |
| **🔄 Returns Summary** | Refund amounts and return count by product |

<br>

***You'll know exactly how your business performed — instantly.***

<br>

---

## ⚠️ Important — Read Before You Start

<br>

> **⚠️ Do NOT rename the downloaded files**
>
> The file names are hard-coded into the script. If you rename any file, the code will break and the menus won't load.
>
> **Use these exact names in Apps Script: Menu / DailyReport / DailySetup / DailyControl / DailyCharts / DailyEmailTemplate**

<br>

> **🔐 You must accept Google's security prompt**
>
> The first time you run the script, Google shows a warning screen. This is normal for ALL personal Apps Script projects — it does not mean the code is dangerous.
>
> Click: "Review permissions" → choose your Google account → "Advanced" → "Go to [project name]" → "Allow"
>
> **You only do this once.** Without this step the script will not run at all.

<br>

> **🚫 Do NOT put anything below your data table**
>
> The script reads every row below your header. Notes, totals, blank rows, or anything below your last order row will be treated as an order and skew your numbers.
>
> **Rule:** Row 1 = headers. Rows 2 onwards = data only. Nothing below the last data row.

<br>

> **📋 Column names must match exactly**
>
> The names you enter in the setup form must be identical to your sheet headers — capital letters and spaces matter.
>
> **Example:** *"Sale Amount" is NOT the same as "sale amount" or "SaleAmount".*

<br>

---

## 📂 HOW TO UPLOAD & ADD ALL THE CODE FILES

*Follow the steps below carefully. The whole process takes about 10 minutes.*

<br>

### PART A — Adding the .gs Script Files

You have two script files: **Menu.gs** and **DailyReport.gs**. These are pasted directly into Apps Script. No uploading to Google Drive needed.

<br>

| **Step** | **Instructions** |
|:--------:|------------------|
| **1** | **Open your Google Sheet and go to Apps Script**<br><br>1. Open the Google Sheet that contains your order data<br>2. In the top menu bar click **Extensions** → **Apps Script**<br>3. A new browser tab opens — this is the Apps Script editor<br><br>> 💡 **Tip**<br>> You will see a default file called "Code.gs" already open. Leave it for now — you will replace its contents in a moment. |
| **2** | **Paste the Menu.gs code**<br><br>4. In the Apps Script editor, click the filename **Code.gs** on the left sidebar<br>5. Select **ALL** existing text in the editor (Ctrl+A on Windows / Cmd+A on Mac) and delete it<br>6. Open the downloaded **Menu.gs** file on your computer with Notepad (Windows) or TextEdit (Mac)<br>7. Select all the text in that file (Ctrl+A / Cmd+A) and copy it (Ctrl+C / Cmd+C)<br>8. Go back to the Apps Script tab and paste (Ctrl+V / Cmd+V)<br>9. Now rename this file: double-click **Code.gs** in the left sidebar, type **Menu** and press Enter<br><br>> ⚠️ **The name must be exactly:**<br>> **Menu** — no spaces, no .gs extension needed, capital M |
| **3** | **Add the DailyReport.gs file**<br><br>10. Click the **+ icon next to "Files"** in the left sidebar<br>11. Select **Script**<br>12. A new file appears — immediately type **DailyReport** and press Enter<br>13. Open the downloaded **DailyReport.gs** file on your computer with Notepad / TextEdit<br>14. Select all → copy → paste into the new Apps Script file<br>15. Click the **💾 Save** icon (or Ctrl+S / Cmd+S)<br><br>> ✅ **After this step your left sidebar should show:**<br>> **Menu** and **DailyReport** — both with a .gs icon |

<br>

### PART B — Adding the HTML Files

**You have four HTML files.** These cannot be pasted directly — you first upload them to Google Drive as plain text, then create an HTML file in Apps Script and paste the code in. Follow these steps for EACH of the four files.

<br>

**The four HTML files are:**
- **DailySetup.html**
- **DailyControl.html**
- **DailyCharts.html**
- **DailyEmailTemplate.html**

<br>

> **🔁 Repeat ALL steps below for each of the 4 HTML files**
>
> The process is identical for all four. Just swap the file name each time.

<br>

| **Step** | **Instructions** |
|:--------:|------------------|
| **1** | **Upload the HTML file to Google Drive as a text file**<br><br>16. Go to [drive.google.com](https://drive.google.com)<br>17. Click **+ New** (top-left button) → select **File upload**<br>18. Find and select the **DailySetup.html** file on your computer and click Open<br>19. The file uploads and appears in your Google Drive<br><br>> 💡 **What this does**<br>> Uploading the file to Drive lets you open it in Google Drive's viewer and see the raw HTML code — which you will copy in the next step. |
| **2** | **Open the uploaded file and copy all the code**<br><br>20. In Google Drive, find the uploaded file **DailySetup.html**<br>21. Double-click it — it will open in Google Drive's file viewer/preview. You should see the raw HTML code.<br>22. Click **Open with → Google Docs** (or right-click the file → Open with → Google Docs)<br>23. Once it opens in Google Docs, click anywhere in the document and press **Ctrl+A / Cmd+A** to select all<br>24. Press **Ctrl+C / Cmd+C** to copy everything<br><br>> ⚠️ **Important**<br>> Make sure you copy the ENTIRE file from top to bottom. It starts with `<!DOCTYPE html>` and ends with `</html>`. If you miss any part the dialog will not display correctly. |
| **3** | **Create an HTML file in Apps Script and paste the code**<br><br>25. Go back to your Apps Script editor tab (the one with Menu and DailyReport)<br>26. Click the **+ icon next to "Files"** in the left sidebar<br>27. This time select **HTML** (not Script)<br>28. A new file appears — immediately type the name **DailySetup** and press Enter<br>29. The editor opens a blank HTML template. Delete everything inside it<br>30. Paste your copied code with **Ctrl+V / Cmd+V**<br>31. Click **💾 Save** (Ctrl+S / Cmd+S)<br><br>> ⚠️ **The name must match exactly — no .html extension**<br><br>| **File on your computer** | **Name it THIS in Apps Script** |
> |---------------------------|--------------------------------|
> | DailySetup.html | **DailySetup** |
> | DailyControl.html | **DailyControl** |
> | DailyCharts.html | **DailyCharts** |
> | DailyEmailTemplate.html | **DailyEmailTemplate** |
| **4** | **Repeat for all 4 HTML files**<br><br>Go back to Step 1 of Part B and do the same process for the remaining three files:<br><br>• **DailyControl.html** → name it **DailyControl**<br>• **DailyCharts.html** → name it **DailyCharts**<br>• **DailyEmailTemplate.html** → name it **DailyEmailTemplate** |

<br>

### PART C — Verify Everything & Run

<br>

| **Step** | **Instructions** |
|:--------:|------------------|
| **1** | **Check your file list**<br><br>In the Apps Script left sidebar you should now see exactly 6 files:<br><br>| **File name** | **Type** |
> |---------------|----------|
> | **Menu** | .gs (Script) |
> | **DailyReport** | .gs (Script) |
> | **DailySetup** | .html |
> | **DailyControl** | .html |
> | **DailyCharts** | .html |
> | **DailyEmailTemplate** | .html |
><br>*If any file is missing, go back and add it before continuing.* |
| **2** | **Save and reload the spreadsheet**<br><br>32. Press **Ctrl+S / Cmd+S** to save all files in Apps Script<br>33. Close the Apps Script tab<br>34. Go back to your Google Sheet and refresh the page (F5 / Cmd+R)<br>35. After a few seconds, a new menu **☀️ Daily Revenue Report** will appear in the top menu bar<br><br>> 💡 **Don't see the menu?**<br>> Wait 10 seconds and refresh again. If it still doesn't appear, double-check that Menu.gs is saved and that the file name is exactly "Menu" with no extra spaces. |
| **3** | **Accept Google's security permission (one time only)**<br><br>36. Click **☀️ Daily Revenue Report** → **⚙️ Setup / Control Panel**<br>37. A permissions dialog will appear — this is Google asking you to authorise the script<br>38. Click **"Review permissions"**<br>39. Select your Google account<br>40. Click **"Advanced"** then **"Go to [your project name] (unsafe)"**<br>41. Click **"Allow"**<br><br>> 🔐 **Why Google shows this warning**<br>> The "unsafe" label appears on ANY personal Apps Script project that has not been through Google's paid review process. It does NOT mean the code is harmful. This is your own code running in your own account. |
| **4** | **Run the Setup form**<br><br>42. The **⚙️ Setup / Control Panel** window opens automatically after permissions<br>43. Enter your sheet name, column names, email address, and delivery time<br>44. Click **"Save & Schedule"**<br>45. You will receive a test email within a few minutes to confirm everything works<br><br>> ✅ **That's it!**<br>> From this point the script runs every day at the time you set — no computer needs to be on, no action needed from you. |

<br>

---

## 🔒 No risk. No complexity.

<br>

| **🚫 No coding needed** | **🚫 No subscriptions** | **🚫 No third-party tools** | **🚫 No data leaving Google** |
|:-----------------------:|:-----------------------:|:--------------------------:|:----------------------------:|
| | | | |

<br>

Everything runs inside your own Google account. Your data stays yours.

<br>

---

## 🎯 Who this is for

<br>

| | |
|-|-|
| • Small business owners | • E-commerce store managers |
| • Online sellers (Shopify, Etsy, etc.) | • Anyone using Google Sheets for revenue |
| • Freelancers tracking income | • People who hate manual reporting |

<br>

---

## 🤔 Common concerns — answered

<br>

**"I'm not technical."**

You paste the code, fill in a form, click save. That's the whole process. No coding, no terminal, no configuration files.

<br>

**"My spreadsheet looks different."**

You choose your own column names during setup. The tool adapts to however your sheet is structured.

<br>

**"I don't track returns."**

No problem. Just type "No" in the Return Column field during setup. The feature is completely optional.

<br>

**"What if something breaks?"**

The built-in System Status screen shows any errors instantly. You can also send yourself a test report at any time from the Control Panel.

<br>

**"Will it stop if I close my laptop?"**

No. The trigger runs on Google's servers — your computer doesn't need to be on at all. Set it once and it runs forever.

<br>

**"Is my data safe?"**

Completely. The script only reads your sheet and sends emails to the addresses you set. Nothing goes to any outside server. It all stays in your Google account.

<br>

---

## 🧪 Proven & reliable

<br>

| | |
|-|-|
| • Handles thousands of rows without slowing down | • Built-in error handling & validation |
| • Automatically processes refunds & returns | • System status screen for instant diagnostics |
| • Sends reports daily without fail | • Tested on real business data |

<br>

> **🎁 Price: FREE — for now**

*No catch. No upsell. No credit card.*

If this saves you even 10 minutes a day — that's hours every month.

<br>

---

## 🚀 Start using it now

*Stop digging through spreadsheets. Start making decisions.*

Download for free and get your first report tomorrow morning.

<br>

> **👉 Get Instant Access — FREE | Set up in 10 minutes | Runs forever**

<br>

---

## 📬 Feedback & Support

This tool is completely free and I want it to keep getting better. If you:

- Found a bug or something isn't working
- Have an idea for a new feature
- Want to share how it helped your business
- Have a question not covered in this guide

Send an honest email to: **[htoopyae0309@gmail.com](mailto:htoopyae0309@gmail.com)**

*Honest feedback is always welcome — good or bad. It helps make this better for everyone.*

<br>

---

*☀️ Daily Revenue Report v2.0 • Free forever • Made with Google Apps Script*
