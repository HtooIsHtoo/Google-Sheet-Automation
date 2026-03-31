**🚀 Daily Revenue Report**

**Google Sheets Automation**

*Stop guessing your numbers every day.*

<br>

You open your spreadsheet...

Rows everywhere. Numbers everywhere.

*But one simple question stays unanswered:*

<br>

  -----------------------------------------------------------------------
               **"Did my business actually grow today?"**
  -----------------------------------------------------------------------

<br>

That's not analysis.

That's busywork --- and it's **slowing you down.**

<br>

**📬 What if your report was already waiting for you?**

Imagine waking up... opening your email... and instantly knowing:

<br>

+----------------------------------+:----------------------------------+
| - 💰 **How much you made         | **No spreadsheets.**              |
|   yesterday**                    |                                   |
|                                  | **No calculations.**              |
| - 🏆 **What products performed   |                                   |
|   best**                         | **No stress.**                    |
|                                  |                                   |
| - 📈 **Whether you're growing   |                                   |
|   or dropping**                  |                                   |
+----------------------------------+-----------------------------------+

<br>

  -----------------------------------------------------------------------
      💡 In one sentence: Turns your messy spreadsheet into a clean,
        automated daily revenue report sent straight to your inbox.
  -----------------------------------------------------------------------

<br>

**⚡ Why people love this**

<br>

+----------------------------------+-----------------------------------+
| **You STOP:**                    | **You START getting:**            |
|                                  |                                   |
| - Checking spreadsheets manually | - 📊 Daily revenue & orders       |
|                                  |                                   |
| - Missing important trends       | - 📉 Growth vs yesterday          |
|                                  |                                   |
| - Wasting time on calculations   | - 🧾 Full product breakdown       |
|                                  |                                   |
| - Making decisions in the dark   | - 📧 Clean professional emails    |
|                                  |                                   |
|                                  | - 🧠 Data for real decisions      |
+----------------------------------+-----------------------------------+

<br>

**This isn't just data. It shows you:**

<br>

  ----------------- ----------------- ----------------- -----------------
    **📈 What's      **📉 What's     **⚠️ What needs    **✅ How you
      growing**        dropping**        attention**        compare**
  ----------------- ----------------- ----------------- -----------------

<br>

*So you can make smarter decisions faster --- every single day.*

<br>

**⚙️ What you get**

A complete automation system --- everything included:

<br>

+----------------------------------+-----------------------------------+
| - 🗂️ **Menu.gs** --- control     | - 🎛️ **DailyControl.html** ---    |
|   panel & setup                  |   test, edit, stop anytime        |
|                                  |                                   |
| - ⚙️ **DailyReport.gs** --- data | - 📈 **DailyCharts.html** ---     |
|   processing engine              |   interactive charts              |
|                                  |                                   |
| - 🖥️ **DailySetup.html** ---     | - 📧 **DailyEmailTemplate.html**  |
|   easy config UI                 |   --- HTML email template         |
+----------------------------------+-----------------------------------+

<br>

  -----------------------------------------------------------------------
                **Everything is ready. Just add and run.**
  -----------------------------------------------------------------------

<br>

**📊 What's inside your daily report**

<br>

  ----------------------------------- -----------------------------------
  **Metric**                          **What it tells you**

  **💰 Total Revenue**                Net + gross, after returns are
                                      subtracted

  **📦 Total Orders**                 Real sales only --- returns
                                      excluded automatically

  **📊 Average Order Value**          AOV per non-return transaction

  **📈 Day-over-Day %**               How yesterday compares to the day
                                      before

  **🏷️ Product Breakdown**            Revenue & orders per product or
                                      category

  **🔄 Returns Summary**              Refund amounts and return count by
                                      product
  ----------------------------------- -----------------------------------

<br>

***You'll know exactly how your business performed --- instantly.***

<br>

**⚠️ Important --- Read Before You Start**

<br>

+-----------------------------------------------------------------------+
| **⚠️ Do NOT rename the downloaded files**                             |
|                                                                       |
| The file names are hard-coded into the script. If you rename any      |
| file, the code will break and the menus won't load.                  |
|                                                                       |
| **Use these exact names in Apps Script: Menu / DailyReport /          |
| DailySetup / DailyControl / DailyCharts / DailyEmailTemplate**        |
+-----------------------------------------------------------------------+

<br>

+-----------------------------------------------------------------------+
| **🔐 You must accept Google's security prompt**                      |
|                                                                       |
| The first time you run the script, Google shows a warning screen.     |
| This is normal for ALL personal Apps Script projects --- it does not  |
| mean the code is dangerous.                                           |
|                                                                       |
| Click: "Review permissions" → choose your Google account →            |
| "Advanced" → "Go to \[project name\]" → "Allow"                      |
|                                                                       |
| **You only do this once.** Without this step the script will not run  |
| at all.                                                               |
+-----------------------------------------------------------------------+

<br>

+-----------------------------------------------------------------------+
| **🚫 Do NOT put anything below your data table**                      |
|                                                                       |
| The script reads every row below your header. Notes, totals, blank    |
| rows, or anything below your last order row will be treated as an     |
| order and skew your numbers.                                          |
|                                                                       |
| **Rule:** Row 1 = headers. Rows 2 onwards = data only. Nothing below  |
| the last data row.                                                    |
+-----------------------------------------------------------------------+

<br>

+-----------------------------------------------------------------------+
| **📋 Column names must match exactly**                                |
|                                                                       |
| The names you enter in the setup form must be identical to your sheet |
| headers --- capital letters and spaces matter.                        |
|                                                                       |
| **Example:** *"Sale Amount" is NOT the same as "sale amount" or       |
| "SaleAmount".*                                                       |
+-----------------------------------------------------------------------+

<br>

  -----------------------------------------------------------------------
               **📂 HOW TO UPLOAD & ADD ALL THE CODE FILES**
  -----------------------------------------------------------------------

<br>

*Follow the steps below carefully. The whole process takes about 10
minutes.*

<br>

**PART A --- Adding the .gs Script Files**

You have two script files: **Menu.gs** and **DailyReport.gs**. These are
pasted directly into Apps Script. No uploading to Google Drive needed.

<br>

+:-----:+---------------------------------------------------------------------------+
| **1** | **Open your Google Sheet and go to Apps Script**                          |
|       |                                                                           |
|       | 1.  Open the Google Sheet that contains your order data                   |
|       |                                                                           |
|       | 2.  In the top menu bar click **Extensions** → **Apps Script**            |
|       |                                                                           |
|       | 3.  A new browser tab opens --- this is the Apps Script editor            |
|       |                                                                           |
|       | +-----------------------------------------------------------------------+ |
|       | | **💡 Tip**                                                            | |
|       | |                                                                       | |
|       | | You will see a default file called "Code.gs" already open. Leave it | |
|       | | for now --- you will replace its contents in a moment.                | |
|       | +-----------------------------------------------------------------------+ |
+-------+---------------------------------------------------------------------------+

<br>

+:-----:+---------------------------------------------------------------------------+
| **2** | **Paste the Menu.gs code**                                                |
|       |                                                                           |
|       | 4.  In the Apps Script editor, click the filename **Code.gs** on the left |
|       |     sidebar                                                               |
|       |                                                                           |
|       | 5.  Select **ALL** existing text in the editor (Ctrl+A on Windows / Cmd+A |
|       |     on Mac) and delete it                                                 |
|       |                                                                           |
|       | 6.  Open the downloaded **Menu.gs** file on your computer with Notepad    |
|       |     (Windows) or TextEdit (Mac)                                           |
|       |                                                                           |
|       | 7.  Select all the text in that file (Ctrl+A / Cmd+A) and copy it (Ctrl+C |
|       |     / Cmd+C)                                                              |
|       |                                                                           |
|       | 8.  Go back to the Apps Script tab and paste (Ctrl+V / Cmd+V)             |
|       |                                                                           |
|       | 9.  Now rename this file: double-click **Code.gs** in the left sidebar,   |
|       |     type **Menu** and press Enter                                         |
|       |                                                                           |
|       | +-----------------------------------------------------------------------+ |
|       | | **⚠️ The name must be exactly:**                                      | |
|       | |                                                                       | |
|       | | **Menu** --- no spaces, no .gs extension needed, capital M            | |
|       | +-----------------------------------------------------------------------+ |
+-------+---------------------------------------------------------------------------+

<br>

+:-----:+---------------------------------------------------------------------------+
| **3** | **Add the DailyReport.gs file**                                           |
|       |                                                                           |
|       | 10. Click the **+ icon next to "Files"** in the left sidebar            |
|       |                                                                           |
|       | 11. Select **Script**                                                     |
|       |                                                                           |
|       | 12. A new file appears --- immediately type **DailyReport** and press     |
|       |     Enter                                                                 |
|       |                                                                           |
|       | 13. Open the downloaded **DailyReport.gs** file on your computer with     |
|       |     Notepad / TextEdit                                                    |
|       |                                                                           |
|       | 14. Select all → copy → paste into the new Apps Script file               |
|       |                                                                           |
|       | 15. Click the **💾 Save** icon (or Ctrl+S / Cmd+S)                        |
|       |                                                                           |
|       | +-----------------------------------------------------------------------+ |
|       | | **✅ After this step your left sidebar should show:**                 | |
|       | |                                                                       | |
|       | | **Menu** and **DailyReport** --- both with a .gs icon                 | |
|       | +-----------------------------------------------------------------------+ |
+-------+---------------------------------------------------------------------------+

<br>

**PART B --- Adding the HTML Files**

**You have four HTML files.** These cannot be pasted directly --- you
first upload them to Google Drive as plain text, then create an HTML
file in Apps Script and paste the code in. Follow these steps for EACH
of the four files.

**The four HTML files are:**

- **DailySetup.html**

- **DailyControl.html**

- **DailyCharts.html**

- **DailyEmailTemplate.html**

<br>

+-----------------------------------------------------------------------+
| **🔁 Repeat ALL steps below for each of the 4 HTML files**            |
|                                                                       |
| The process is identical for all four. Just swap the file name each   |
| time.                                                                 |
+-----------------------------------------------------------------------+

<br>

+:-----:+---------------------------------------------------------------------------+
| **1** | **Upload the HTML file to Google Drive as a text file**                   |
|       |                                                                           |
|       | 16. Go to [[drive.google.com]{.underline}](https://drive.google.com)      |
|       |                                                                           |
|       | 17. Click **+ New** (top-left button) → select **File upload**            |
|       |                                                                           |
|       | 18. Find and select the **DailySetup.html** file on your computer and     |
|       |     click Open                                                            |
|       |                                                                           |
|       | 19. The file uploads and appears in your Google Drive                     |
|       |                                                                           |
|       | +-----------------------------------------------------------------------+ |
|       | | **💡 What this does**                                                 | |
|       | |                                                                       | |
|       | | Uploading the file to Drive lets you open it in Google Drive's       | |
|       | | viewer and see the raw HTML code --- which you will copy in the next  | |
|       | | step.                                                                 | |
|       | +-----------------------------------------------------------------------+ |
+-------+---------------------------------------------------------------------------+

<br>

+:-----:+---------------------------------------------------------------------------+
| **2** | **Open the uploaded file and copy all the code**                          |
|       |                                                                           |
|       | 20. In Google Drive, find the uploaded file **DailySetup.html**           |
|       |                                                                           |
|       | 21. Double-click it --- it will open in Google Drive's file              |
|       |     viewer/preview. You should see the raw HTML code.                     |
|       |                                                                           |
|       | 22. Click **Open with → Google Docs** (or right-click the file → Open     |
|       |     with → Google Docs)                                                   |
|       |                                                                           |
|       | 23. Once it opens in Google Docs, click anywhere in the document and      |
|       |     press **Ctrl+A / Cmd+A** to select all                                |
|       |                                                                           |
|       | 24. Press **Ctrl+C / Cmd+C** to copy everything                           |
|       |                                                                           |
|       | +-----------------------------------------------------------------------+ |
|       | | **⚠️ Important**                                                      | |
|       | |                                                                       | |
|       | | Make sure you copy the ENTIRE file from top to bottom. It starts with | |
|       | | \<!DOCTYPE html\> and ends with \</html\>. If you miss any part the   | |
|       | | dialog will not display correctly.                                    | |
|       | +-----------------------------------------------------------------------+ |
+-------+---------------------------------------------------------------------------+

<br>

+:-----:+-------------------------------------------------------------------------------+
| **3** | **Create an HTML file in Apps Script and paste the code**                     |
|       |                                                                               |
|       | 25. Go back to your Apps Script editor tab (the one with Menu and             |
|       |     DailyReport)                                                              |
|       |                                                                               |
|       | 26. Click the **+ icon next to "Files"** in the left sidebar                |
|       |                                                                               |
|       | 27. This time select **HTML** (not Script)                                    |
|       |                                                                               |
|       | 28. A new file appears --- immediately type the name **DailySetup** and press |
|       |     Enter                                                                     |
|       |                                                                               |
|       | 29. The editor opens a blank HTML template. Delete everything inside it       |
|       |                                                                               |
|       | 30. Paste your copied code with **Ctrl+V / Cmd+V**                            |
|       |                                                                               |
|       | 31. Click **💾 Save** (Ctrl+S / Cmd+S)                                        |
|       |                                                                               |
|       | +---------------------------------------------------------------------------+ |
|       | | **⚠️ The name must match exactly --- no .html extension**                 | |
|       | |                                                                           | |
|       | | Type just the name, not the extension. Apps Script adds the .html         | |
|       | | automatically:                                                            | |
|       | |                                                                           | |
|       | |   ----------------------------------- ----------------------------------- | |
|       | |   **File on your computer**           **Name it THIS in Apps Script**     | |
|       | |                                                                           | |
|       | |   DailySetup.html                     **DailySetup**                      | |
|       | |                                                                           | |
|       | |   DailyControl.html                   **DailyControl**                    | |
|       | |                                                                           | |
|       | |   DailyCharts.html                    **DailyCharts**                     | |
|       | |                                                                           | |
|       | |   DailyEmailTemplate.html             **DailyEmailTemplate**              | |
|       | |   ----------------------------------- ----------------------------------- | |
|       | +---------------------------------------------------------------------------+ |
+-------+-------------------------------------------------------------------------------+

<br>

+:-----:+-----------------------------------------------------------------+
| **4** | **Repeat for all 4 HTML files**                                 |
|       |                                                                 |
|       | Go back to Step 1 of Part B and do the same process for the     |
|       | remaining three files:                                          |
|       |                                                                 |
|       | - **DailyControl.html** → name it **DailyControl**              |
|       |                                                                 |
|       | - **DailyCharts.html** → name it **DailyCharts**                |
|       |                                                                 |
|       | - **DailyEmailTemplate.html** → name it **DailyEmailTemplate**  |
+-------+-----------------------------------------------------------------+

<br>

**PART C --- Verify Everything & Run**

<br>

+:-----:+---------------------------------------------------------------------------+
| **1** | **Check your file list**                                                  |
|       |                                                                           |
|       | In the Apps Script left sidebar you should now see exactly 6 files:       |
|       |                                                                           |
|       |   ----------------------------------- ----------------------------------- |
|       |   **File name**                       **Type**                            |
|       |                                                                           |
|       |   **Menu**                            .gs (Script)                        |
|       |                                                                           |
|       |   **DailyReport**                     .gs (Script)                        |
|       |                                                                           |
|       |   **DailySetup**                      .html                               |
|       |                                                                           |
|       |   **DailyControl**                    .html                               |
|       |                                                                           |
|       |   **DailyCharts**                     .html                               |
|       |                                                                           |
|       |   **DailyEmailTemplate**              .html                               |
|       |   ----------------------------------- ----------------------------------- |
|       |                                                                           |
|       | *If any file is missing, go back and add it before continuing.*           |
+-------+---------------------------------------------------------------------------+

<br>

+:-----:+---------------------------------------------------------------------------+
| **2** | **Save and reload the spreadsheet**                                       |
|       |                                                                           |
|       | 32. Press **Ctrl+S / Cmd+S** to save all files in Apps Script             |
|       |                                                                           |
|       | 33. Close the Apps Script tab                                             |
|       |                                                                           |
|       | 34. Go back to your Google Sheet and refresh the page (F5 / Cmd+R)        |
|       |                                                                           |
|       | 35. After a few seconds, a new menu **☀️ Daily Revenue Report** will      |
|       |     appear in the top menu bar                                            |
|       |                                                                           |
|       | +-----------------------------------------------------------------------+ |
|       | | **💡 Don't see the menu?**                                           | |
|       | |                                                                       | |
|       | | Wait 10 seconds and refresh again. If it still doesn't appear,       | |
|       | | double-check that Menu.gs is saved and that the file name is exactly  | |
|       | | "Menu" with no extra spaces.                                        | |
|       | +-----------------------------------------------------------------------+ |
+-------+---------------------------------------------------------------------------+

<br>

+:-----:+---------------------------------------------------------------------------+
| **3** | **Accept Google's security permission (one time only)**                  |
|       |                                                                           |
|       | 36. Click **☀️ Daily Revenue Report** → **⚙️ Setup / Control Panel**      |
|       |                                                                           |
|       | 37. A permissions dialog will appear --- this is Google asking you to     |
|       |     authorise the script                                                  |
|       |                                                                           |
|       | 38. Click **"Review permissions"**                                      |
|       |                                                                           |
|       | 39. Select your Google account                                            |
|       |                                                                           |
|       | 40. Click **"Advanced"** then **"Go to \[your project name\]           |
|       |     (unsafe)"**                                                          |
|       |                                                                           |
|       | 41. Click **"Allow"**                                                   |
|       |                                                                           |
|       | +-----------------------------------------------------------------------+ |
|       | | **🔐 Why Google shows this warning**                                  | |
|       | |                                                                       | |
|       | | The "unsafe" label appears on ANY personal Apps Script project that | |
|       | | has not been through Google's paid review process. It does NOT mean  | |
|       | | the code is harmful. This is your own code running in your own        | |
|       | | account.                                                              | |
|       | +-----------------------------------------------------------------------+ |
+-------+---------------------------------------------------------------------------+

<br>

+:-----:+---------------------------------------------------------------------------+
| **4** | **Run the Setup form**                                                    |
|       |                                                                           |
|       | 42. The **⚙️ Setup / Control Panel** window opens automatically after     |
|       |     permissions                                                           |
|       |                                                                           |
|       | 43. Enter your sheet name, column names, email address, and delivery time |
|       |                                                                           |
|       | 44. Click **"Save & Schedule"**                                         |
|       |                                                                           |
|       | 45. You will receive a test email within a few minutes to confirm         |
|       |     everything works                                                      |
|       |                                                                           |
|       | +-----------------------------------------------------------------------+ |
|       | | **✅ That's it!**                                                    | |
|       | |                                                                       | |
|       | | From this point the script runs every day at the time you set --- no  | |
|       | | computer needs to be on, no action needed from you.                   | |
|       | +-----------------------------------------------------------------------+ |
+-------+---------------------------------------------------------------------------+

<br>

**🔒 No risk. No complexity.**

<br>

  ----------------- ----------------- ----------------- -----------------
   **🚫 No coding        **🚫 No           **🚫 No        **🚫 No data
      needed**       subscriptions**     third-party    leaving Google**
                                           tools**      
  ----------------- ----------------- ----------------- -----------------

<br>

  -----------------------------------------------------------------------
  Everything runs inside your own Google account. Your data stays yours.
  -----------------------------------------------------------------------

<br>

**🎯 Who this is for**

<br>

+----------------------------------+-----------------------------------+
| - Small business owners          | - E-commerce store managers       |
|                                  |                                   |
| - Online sellers (Shopify, Etsy, | - Anyone using Google Sheets for   |
|   etc.)                          |   revenue                         |
|                                  |                                   |
| - Freelancers tracking income    | - People who hate manual          |
|                                  |   reporting                       |
+----------------------------------+-----------------------------------+

<br>

**🤔 Common concerns --- answered**

<br>

**"I'm not technical."**

You paste the code, fill in a form, click save. That's the whole
process. No coding, no terminal, no configuration files.

<br>

**"My spreadsheet looks different."**

You choose your own column names during setup. The tool adapts to
however your sheet is structured.

<br>

**"I don't track returns."**

No problem. Just type "No" in the Return Column field during setup. The
feature is completely optional.

<br>

**"What if something breaks?"**

The built-in System Status screen shows any errors instantly. You can
also send yourself a test report at any time from the Control Panel.

<br>

**"Will it stop if I close my laptop?"**

No. The trigger runs on Google's servers --- your computer doesn't
need to be on at all. Set it once and it runs forever.

<br>

**"Is my data safe?"**

Completely. The script only reads your sheet and sends emails to the
addresses you set. Nothing goes to any outside server. It all stays in
your Google account.

<br>

**🧪 Proven & reliable**

<br>

+----------------------------------+-----------------------------------+
| - Handles thousands of rows      | - Built-in error handling &       |
|   without slowing down           |   validation                      |
|                                  |                                   |
| - Automatically processes        | - System status screen for        |
|   refunds & returns              |   instant diagnostics             |
|                                  |                                   |
| - Sends reports daily without    | - Tested on real business data    |
|   fail                           |                                   |
+----------------------------------+-----------------------------------+

<br>

  -----------------------------------------------------------------------
                      **🎁 Price: FREE --- for now**
  -----------------------------------------------------------------------

<br>

*No catch. No upsell. No credit card.*

If this saves you even 10 minutes a day --- that's hours every month.

<br>

**🚀 Start using it now**

*Stop digging through spreadsheets. Start making decisions.*

Download for free and get your first report tomorrow morning.

<br>

  -----------------------------------------------------------------------
     **👉 Get Instant Access --- FREE \| Set up in 10 minutes \| Runs
                                 forever**
  -----------------------------------------------------------------------

<br>

**📬 Feedback & Support**

This tool is completely free and I want it to keep getting better. If
you:

- Found a bug or something isn't working

- Have an idea for a new feature

- Want to share how it helped your business

- Have a question not covered in this guide

Send an honest email to: **[htoopyae0309@gmail.com]{.underline}**

*Honest feedback is always welcome --- good or bad. It helps make this
better for everyone.*

<br>

*☀️ Daily Revenue Report v2.0 • Free forever • Made with Google Apps
Script*
