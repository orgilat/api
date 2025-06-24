import { Page, Locator, expect } from '@playwright/test';
import { logger } from '../Logger';
import fs from 'fs';
import path from 'path';
import { PNG } from 'pngjs';
import pixelmatch from 'pixelmatch';

export class FlowPage {
  readonly page: Page;
  readonly loginInput: Locator;
  readonly passwordInput: Locator;
  readonly submitButton: Locator;
  readonly surveyAdminLink: Locator;
  readonly sociometricLink: Locator;
  readonly modelingButton: Locator;  // כפתור הגדרת מודלי חישוב
  readonly modelingButton1: Locator;
  readonly list: Locator;
  readonly list1: Locator;
  readonly list2: Locator;
  readonly eventManagementButton: Locator;
  readonly createNewEventButton: Locator;
  readonly eventNameInput: Locator;
  readonly seasonDropdown: Locator;
  readonly startDateButton: Locator;
  readonly endDateButton: Locator;
  readonly seasonOption: Locator;
  readonly recruit: Locator;
  readonly recruitOption: Locator;
  readonly mateS: Locator;
  readonly mateC: Locator;
  readonly pikud1: Locator; 
  readonly list22: Locator;
  readonly ogda1: Locator;
  readonly end1: Locator;
  readonly end2: Locator;
  readonly end3: Locator;
  readonly end4: Locator;
  readonly final: Locator;
  readonly calculate: Locator;
  readonly show: Locator;
  readonly show1: Locator;
  readonly f1: Locator;
  readonly f2: Locator;
  readonly f4: Locator;
  readonly all: Locator;
  readonly must: Locator;
  readonly must2: Locator;
  readonly must3: Locator;
  readonly must4: Locator;
  readonly must5: Locator;
  readonly must6: Locator;
  readonly must7: Locator;
  readonly must8: Locator;
  readonly must9: Locator;
  readonly must10: Locator;
  readonly must11: Locator;
  readonly must12: Locator;
  readonly must13: Locator;
  readonly tr1: Locator;
  readonly page2: Locator;
  readonly tableRows: Locator;
  readonly must14: Locator;
  readonly must15: Locator;
  readonly must16: Locator;
  readonly table: Locator;
  readonly must17: Locator;
  readonly table2: Locator;
    readonly kpi: Locator;
 readonly kpi2: Locator;
  readonly table3: Locator;
  readonly table4: Locator;
 readonly table5: Locator;
 readonly btn: Locator;


  constructor(page: Page) {
    this.page = page;
    this.btn = page.locator('input.btn');
    this.loginInput = page.locator('input[name="login"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.submitButton = page.locator('input[type="submit"]');
    this.surveyAdminLink = page.locator('a:has-text("ניהול הסקר")');
    this.sociometricLink = page.locator('a:has-text("ניהול סוציומטרי")');
    this.modelingButton =page.getByRole('button', { name: 'הגדרת מודלי חישוב' })
    this.modelingButton1 =page.locator('div.ss-values')
    this.list =page.locator('div.ss-list')
    this.list1 =page.locator('//a[normalize-space(text())="ניתוח והצגת תוצאות"]')
    this.list2 = page.locator('a:has-text("דוחות")');
    this.eventManagementButton = page.locator('input[value="1\u00A0\u00A0ניהול אירועים"]');
    this.createNewEventButton = page.locator('button:has-text("להקמת אירוע חדש")');
    this.eventNameInput = page.locator('div.text-box[data-label-val="שם האירוע"] input[type="text"]');
        this.seasonDropdown = page.locator('div.dropdown.dropdown-select[label="No-Text period"]');
        this.seasonOption = page.locator('span:has-text("עונת 1")');
        this.recruit = page.locator('div.dropdown-btn.text-box[data-label-val="No-Text pikud"]');
        this.recruitOption = page.locator('span:has-text("כללי")');
        this.mateS = page.locator('div.dropdown-btn.text-box[data-label-val="הגדרת סוג היחידה לאירוע "]');
        this.mateC = page.locator('span:has-text("מטה")');
        this.pikud1 = page.locator(
            'li[role="treeitem"][aria-label="פיקוד 1"] >> div[role="checkbox"]'
          );
          this.list22 = page.locator(
            'div.col-4:has(div.section_title:has-text("בחירת יחידות מאגדות להצגת דוח מילוי"))'
          );
        
          // מתוך אותו קונטיינר – מגדירים את ה־checkbox של אוגדה 1
               this.ogda1 = this.list2.locator(
            'li[role="treeitem"][aria-label="אוגדה 1"] >> div.dx-checkbox-container'
          );
        
       
        
        
                this.startDateButton = page.locator(
                    '#layout > div > div.app_content > div > main > div > div:nth-child(9) > div > div:nth-child(1) > div > div.dx-dropdowneditor-input-wrapper > div > div.dx-texteditor-buttons-container > div.dx-widget.dx-button-mode-contained.dx-button-normal.dx-rtl.dx-dropdowneditor-button'
                );
                this.endDateButton = page.locator(
                    '#layout > div > div.app_content > div > main > div > div:nth-child(9) > div > div:nth-child(2) > div > div.dx-dropdowneditor-input-wrapper > div > div.dx-texteditor-buttons-container > div.dx-widget.dx-button-mode-contained.dx-button-normal.dx-rtl.dx-dropdowneditor-button'
                );
        
        
        
                this.end1 = page.locator('#layout > div > div.app_content > div > main > div > div:nth-child(22) > div.questions_section > div:nth-child(2) > div');
                
                this.end3 = page.locator('#layout > div > div.app_content > div > main > div > div:nth-child(22) > div.questions_section > div:nth-child(6) > div');
                
                this.final = page.locator('div.q-tab__label:has-text("ניהול פוטנציאל")');
        
           this.calculate = page.getByRole('button', { name: 'חשב פוטנציאל מחדש' });
    this.show = page.getByRole('button', { name: 'הצג פוטנציאל' })
    this.show1 = page.getByRole('button', { name: 'הצג פוטנציאל' })  
 
    this.f1 = page.getByRole('button', { name: 'Select' }).nth(1)
    this.f2= page.getByText('לא', { exact: true })
    this.f4= page.getByText('close')
    this.all = page.locator('//input[@type="button"]');
    this.must = page.locator(' input[value="שאלות חובה לסוציומטרי"]');
    this.must2 = page.locator('input[value="שדות לפילטור הפוטנציאל"]');
    this.must3= page.locator('//div[@class="page-title"]//span[1]');
    this.must4= page.locator('input[type="submit"]');
    this.must5= page.locator('table.tablestyle');
    this.must6= page.locator('(//div[@class="ss-single"])[1]');
    this.must7= page.locator('(//div[@class="ss-single"])[2]');
    this.must8= page.locator("button[title='חריגות בגין מידת היכרות']");
    this.must9= page.locator('#myBtn');
    this.must10= page.locator("(//div[@class='text-center']//label)");
    this.must11= page.locator("#mainTable");
    this.must12 = page.locator("(//form[@method='POST']//label)");
    this.must13 = page.locator("(//div[@class='ss-main btn'])");
    this.tr1 = page.locator("//tr[@aria-selected='false']");
    this.page2 = page.locator("//div[@aria-label='Page 7']");
    this.tableRows = page.locator("//table[@letxpath='letxpathtable']//tr");
    this.must14 = page.locator("(//table[@dir='rtl']//td)[2]");
    this.must15 = page.locator("//td[normalize-space(text())='מטה']");
    this.must16 = page.locator(" (//input[@value='הוסף ימי היעדרות'])[2]");
     this.table = page.locator(".tablestyle");
   this.must17 = page.locator("//input[@value='שלח']");
   this.table2 = page.locator(".optionsqdesign-table");
    this.kpi= page.locator("input[value='אשכולות KPI']");
    this.kpi2= page.locator("input[value='הגדרת מענה מינ´ ומקס´ לשאלות באשכול']");
    this.table3 = page.locator(".clustersorder-table");
    this.table4 = page.locator("input[value='אשכול חדש']");
    this.table5 = page.locator("(//table[@cellspacing='0']//tr)");
  }

  async goto() {
    await this.page.goto('https://www.survey.co.il/pms/MMDANEW/default.asp');
  }

  async login(username: string, password: string) {
    await this.loginInput.fill(username);
    await this.passwordInput.fill(password);
    await this.submitButton.click();
    await this.page.waitForTimeout(1001);
  }

  async goToSociometricManagement() {
    await this.surveyAdminLink.hover();
    await this.sociometricLink.click();
   

  }
  async four() {
    await this.modelingButton.scrollIntoViewIfNeeded()
    await this.modelingButton.click();
    await this.modelingButton1.click();
    await this.list.locator('div.ss-option').nth(1).click();
   await this.list1.hover()
   await this.list2.click()
   
  
  }
  async five() {
    await this.eventManagementButton.click();
    await this.createNewEventButton.click();
    await this.eventNameInput.waitFor({ state: 'visible' });
    await this.eventNameInput.click({ force: true });
    await this.page.waitForTimeout(200); // זמן קטן לייצוב
    await this.eventNameInput.fill(''); // לנקות את השדה
    await this.page.waitForTimeout(200); // עוד זמן קטן
    await this.page.keyboard.type('מרינה 2025', { delay: 150 });
    await expect(this.eventNameInput).toHaveValue('מרינה 2025', { timeout: 5000 });


    await expect(this.eventNameInput).toHaveValue('מרינה 2025', { timeout: 5000 });


    await this.seasonDropdown.click();
    await this.seasonOption.click();
    // הוספת בחירת עונה כאן אם צריך

    // בחירת תאריך התחלה
    await this.startDateButton.click();
    await this.page.keyboard.press('Enter');   // בחירת תאריך סיום
    await this.endDateButton.click();
    await this.page.keyboard.press('Enter');
    await this.recruit.click();
    await this.recruitOption.click();
    logger.info('we came to the end');
    await this.mateS.click();
    logger.info('worked');
    await this.mateC.click();
    await this.pikud1.click();
    logger.info('פיקוד אחד נלחץ');
    await this.page.waitForTimeout(2000)
    await this.page.locator('div:nth-child(18) > .dx-treeview-with-search > .dx-scrollable > .dx-scrollable-wrapper > .dx-scrollable-container > .dx-scrollable-content > ul > li > .dx-treeview-node-container > li > .dx-widget').first().click();
    logger.info('אוגדה 1 נלחצה');
    await this.page.waitForTimeout(2500);
    await this.end1.scrollIntoViewIfNeeded();  // הגלילה כדי לוודא שהאלמנט גלוי
    await this.end1.click({ force: true });
    await this.page.waitForTimeout(2500);
  
    await this.end3.scrollIntoViewIfNeeded();  // הגלילה כדי לוודא שהאלמנט גלוי
    await this.end3.click({ force: true });
    await this.page.waitForTimeout(2500);
    await this.final.scrollIntoViewIfNeeded();  // הגלילה כדי לוודא שהאלמנט גלוי
    await this.final.click({ force: true });
    await this.page.waitForTimeout(2500);
    await this.calculate.click();
    await this.show.click();
    await this.f1.waitFor({ state: 'visible' });
    await this.f1.click();
    await this.f2.waitFor({ state: 'visible' });
    await this.f2.click();
    await this.f4.waitFor({ state: 'visible' });
    await this.f4.click();
    await this.show1.waitFor({ state: 'visible' });
    await this.show1.click();
  }
  async six() {

 await this.all.nth(0).click()
 await expect(this.must).toBeVisible()
 await expect(this.must2).toBeVisible()

}
async seven() {

  await this.all.nth(1).click()
  await expect(this.must3).toBeVisible()
  await expect(this.must3).toContainText("קביעת שאלות חובה")
  await expect(this.must4).toBeVisible()
  await expect(this.must5).toBeVisible()
 }
 async eight() {

  await this.all.nth(2).click()
  await expect(this.must3).toContainText("שדות לניהול פוטנציאל")
  await expect(this.must6).toBeVisible()
  await expect(this.must6).toContainText("סוציומטרי")
  await expect(this.must7).toContainText("מספר אישי")
 
}
 async nine() {

  await this.all.nth(3).click()
  await expect(this.must3).toContainText("קביעת חוקים לבדיקת שאלונים לא תקינים: ")
  await expect(this.must5).toBeVisible()
  await expect(this.must8).toBeVisible()
  await this.must8.click()
  await expect(this.page).toHaveURL('https://www.survey.co.il/pms/MMDANEW/sm_minMaxAnswerRules.asp');

 
 }
 async ten() {

  await this.all.nth(4).click()
  await expect(this.must9).toBeVisible()
  await this.must9.click()
  const count = await this.must10.count();
  await expect(count).toBe(24);
  await expect(this.must11).toBeVisible()


 
 }

 async eleven() {
   await this.all.nth(5).click()
   await expect(this.must3).toContainText("כללי השתתפות לפי סוג יחידה")
   await expect(this.must4).toBeVisible()
   const value = await this.must14.textContent();
   expect(value).toBe("שדה")
   const value2 = await this.must15.textContent();
   expect(value2).toBe("מטה")

 
 }

 async eleven2() {
   await this.all.nth(6).click()
   await expect(this.must3).toContainText("הגדרת השדות שיופיעו בטבלאות")
   await expect(this.table).toBeVisible()
   await expect(this.must17).toBeVisible()

 
 }
 async eleven3() {
   await this.all.nth(7).click()
   await expect(this.must3).toContainText("אופציות שונות לניהול מינ מקס לבחירת היגדים וכללים שונים")
   await expect(this.table2).toBeVisible()


 
 }
 async eleven4() {
   await this.all.nth(8).click()
   await expect(this.must3).toContainText("הגדרה וניהול סטטוסים לאירועים")
   await expect(this.table).toBeVisible()

 
 }



 async eleven6() {
   await this.all.nth(9).click()
   await expect(this.must3).toContainText("סיבות להוספת או הסרת משתתפים באירוע סוציומטרי")
   await expect(this.table).toBeVisible()
   await expect(this.submitButton).toBeVisible()
 
 }
async eleven7() {
   await this.all.nth(10).click()
   await expect(this.must3).toContainText("כמות היגדים נדרשים למילוי כתלות בתשובה בהיגד ספציפי כגון מידת היכרות")
   await expect(this.table).toBeVisible()

 }
async eleven8() {
   await this.all.nth(11).click()
   await expect(this.must3).toContainText("רשימת אשכולות")
   const a = await this.kpi.inputValue();
   expect(a).toContain("אשכולות");
   const ab = await this.kpi2.inputValue();
   expect(ab).toContain("הגדרת מענה");
   await expect(this.table3).toBeVisible()
   await expect(this.table4).toBeVisible()
   const abc = await this.table4.inputValue();
   expect(abc).toContain("אשכול חדש");


 }

 async eleven9() {
   await this.all.nth(12).click()
   await expect(this.must3).toContainText("העברת משיבים ממאגר פוטנציאלי למאגר פעיל ולהיפך")
   await expect(this.all).toBeVisible()
   const a=await this.table5.count()
   expect(a).toBe(46)
   await expect(this.must4).toBeVisible()

 }
  async eleven10() {
   await this.all.nth(13).click()
   await expect(this.must3).toContainText("ניהול הרשאות משתמשים")
   await expect(this.all).toBeVisible()
   const a=await this.table5.count()
   expect(a).toBe(46)
   await expect(this.must4).toBeVisible()

 }

  async eleven11() {
   await this.all.nth(14).click()
 
   await expect(this.submitButton).toBeVisible()
   await expect(this.all).toBeVisible()
   // ניגש לאלמנט לפי ID (כמו בדוגמה שלך)
   const dateInput = this.page.locator('#dateFrom');
   const dateTo = await this.page.locator('#dateTo').inputValue();

// קולטים את הערך מתוך השדה
    const inputValue = await dateInput.inputValue();

// מייצרים את התאריך של היום בפורמט dd/MM/yyyy
const today = new Date();
const day = String(today.getDate()).padStart(2, '0');
const month = String(today.getMonth() + 1).padStart(2, '0');
const year = today.getFullYear();
const todayFormatted = `${day}/${month}/${year}`;

// משווים בין התאריך שבשדה לתאריך של היום
expect(inputValue).toBe(todayFormatted);
expect(dateTo).toBe(todayFormatted);


 }


async eleven12() {
   await this.all.nth(15).click()
   await expect(this.must3).toContainText("הגדרת חוקי העתקה של נתונים מחושבים לשאלון העזר")
   await expect(this.must4).toBeVisible()
   // קולט את כל הלייבלים שבתוך הטופס
    const labels = this.page.locator("//form[@name='sm_precalcrules']//label");
    const count1 = await labels.count();
    expect(count1).toBe(5);
}

async eleven13() {
   await this.all.nth(16).click()
   await expect(this.must3).toContainText("הגדרת כללים לחוקות חישוב ואוכלוסיות למודל חישוב")
   await expect(this.submitButton).toBeVisible()
   // מאתר את הטבלה הראשונה עם cellpadding='0'
   const table = this.page.locator("(//table[@cellpadding='0'])");

// סופר את מספר השורות
const rowCount = await table.count();

// בודק שיש בדיוק 2
expect(rowCount).toBe(2);

}

async eleven14() {
   await this.all.nth(17).click()
   await expect(this.must3).toContainText("רשימת שדות עבור המאגר: מאגר עדכני")
  
   // מאתר את הטבלה הראשונה עם cellpadding='0'
    const table2 = this.page.locator(".mtableedit-table");
   const table = this.page.locator("(//input[@type='button'])");
const table3 = this.page.locator("input[value='הוסף שדה חדש']");
 await expect(table2).toBeVisible()
   await expect(table3).toBeVisible()
// סופר את מספר השורות
const rowCount = await table.count();

// בודק שיש בדיוק 2
expect(rowCount).toBe(15);

}

async eleven15() {
  
  await this.all.nth(18).click();
  await expect(this.page).toHaveURL("https://www.survey.co.il/pms/MMDANEW/sm.asp");
}
async eleven16() {
  await this.all.nth(19).click();
 await expect(this.must3).toContainText("יצוא מצגות לקבוצות משתמשים במרוכז")
  const elements = await this.page.locator("(//div[@class='BodyOut-continar']//td)");
  const count = await elements.count();
  expect(count).toBe(4);
  
}
async eleven17() {
  await this.all.nth(20).click();

   // 1. קליטת שדה חיפוש (input[type='search'])
  const searchInput = this.page.locator("input[type='search']");
  await expect(searchInput).toHaveCount(1); // ודא שיש בדיוק אחד

  // 2. קליטת כפתור בתוך השורה הראשונה של הטבלה
  const firstRowButton = this.page.locator("(//table[@id='mailTable']//tr)[1]");
  await expect(firstRowButton).toHaveCount(1); // ודא שקיים כפתור אחד בשורה הראשונה

  // 3. קליטת div של מידע - dt-info
  const dtInfo = this.page.locator("div.dt-info");
  await expect(dtInfo).toHaveCount(1); // ודא שיש div אחד עם info

  // 4. ודא שסה"כ 4 כפתורים קיימים (לדוגמה אם אתה מתכוון לכמות כללית)
  const allButtons = this.page.locator("input[type='button']");
  await expect(allButtons).toHaveCount(1); // ודא שיש 4 כפתורי input בעמוד
  
}

async eleven18() {
  await this.all.nth(21).click();
  await expect(this.must3).toContainText("ערוך מאפייני קבצי עובד")
  const allButtons = this.page.locator("//a[normalize-space(text())='ערוך רשימת מאפיינים']");
  await allButtons.click()
  await expect(this.page).toHaveURL("https://www.survey.co.il/pms/MMDANEW/interface.asp?ipagename=employeefilesprop");
  
}

async eleven19() {
  await this.all.nth(22).click();
  const allButtons = this.page.locator("(//input[@class='btns'])");
  const count = await allButtons.count();
  expect(count).toBe(2);
}

async eleven20() {
  await this.all.nth(23).click();
  await expect(this.page).toHaveURL("https://www.survey.co.il/pms/MMDANEW/sm.asp");
}
async eleven21() {
  await this.all.nth(24).click();
 await expect(this.page).toHaveURL("https://www.survey.co.il/pms/MMDANEW/sm.asp?action=datalake1");
    this.page.once('dialog', async dialog => {
    const message = dialog.message();
    expect(message).toBe("MMDA Datalake1  - הופעל");  // בדיקת תוכן הפופ-אפ
   
  });
}
async eleven22() {
  await this.all.nth(25).click();
  await expect(this.page).toHaveURL("https://www.survey.co.il/pms/MMDANEW/sm.asp?action=datalake2");
    this.page.once('dialog', async dialog => {
    const message = dialog.message();
    expect(message).toBe("MMDA Datalake2 -  הופעל"); 
  
  });
}

async eleven23() {
  await this.all.nth(26).click();
  await expect(this.page).toHaveURL("https://www.survey.co.il/pms/MMDANEW/sm.asp?action=datalake3");
    this.page.once('dialog', async dialog => {
    const message = dialog.message();
    expect(message).toBe("MMDA Datalake3 -  הופעל"); 
  
  });
}


async eleven24() {
  await this.all.nth(27).click();
  await expect(this.page).toHaveURL("https://www.survey.co.il/pms/MMDANEW/sm_noImportFields.asp");
   await expect(this.must3).toContainText("הגדרת שדות בהם יוקפאו הערכים בעת טעינות לכלל המשתתפים שנמצאים בסטטוס ביצוע")
  const allButtons = this.page.locator("(//button[@type='button'])");
  const count = await allButtons.count();
  await expect(this.must4).toBeVisible()
  const allButtons2 = this.page.locator("(//form[@method='POST']//td)");
  const count2 = await allButtons2.count();
  expect(count).toBe(2);
  expect(count2).toBe(6);
  };




























 async ele() {
  await this.all.nth(5).click();
  await expect(this.must3).toContainText("כללי השתתפות ");
  const screenshotPath = path.resolve('C:\\Users\\User\\Documents\\k6try\\screenshots\\ele_actual.png');
  await this.page.screenshot({ path: screenshotPath, clip: { x: 0, y: 0, width: await this.page.evaluate(() => window.innerWidth), height: 1000 } });

  // טען את תמונת ה-expected הקיימת
  const expectedPath = path.resolve('C:\\Users\\User\\Documents\\k6try\\screenshots\\ele.png');
  const expectedImage = PNG.sync.read(fs.readFileSync(expectedPath));
  const actualImage = PNG.sync.read(fs.readFileSync(screenshotPath));

  const { width, height } = expectedImage;
  const diff = new PNG({ width, height });

  // השווה בין התמונות
  const diffPixels = pixelmatch(expectedImage.data, actualImage.data, diff.data, width, height, { threshold: 0.1 });

  // בדוק שאין הבדל (תפסיק אם יש הבדל)
  expect(diffPixels, `יש הבדל של ${diffPixels} פיקסלים בין התמונה הצפויה לפועלית`).toBe(0);
};
async compareScreenshots(start: number, end: number) {
  for (let i = start; i <= end; i++) {
    await this.all.nth(i).click();

    const screenshotPath = path.resolve(`C:\\Users\\User\\Documents\\k6try\\screenshots\\twohalve_actual_${i}.png`);
    const expectedPath = path.resolve(`C:\\Users\\User\\Documents\\k6try\\screenshots\\twohalve_${i}.png`);

    const width = await this.page.evaluate(() => window.innerWidth);
    const height = await this.page.evaluate(() => window.innerHeight);
    
    
    await this.page.screenshot({ path: screenshotPath, clip: { x: 0, y: 0, width, height } });

    const expectedImage = PNG.sync.read(fs.readFileSync(expectedPath));
    const actualImage = PNG.sync.read(fs.readFileSync(screenshotPath));

    const { width: w, height: h } = expectedImage;
    const diff = new PNG({ width: w, height: h });

    const diffPixels = pixelmatch(expectedImage.data, actualImage.data, diff.data, w, h, { threshold: 0.1 });

    const TOLERANCE = 100;

    expect(diffPixels, `יש הבדל של ${diffPixels} פיקסלים בין התמונה הצפויה לפועלית במסך מספר ${i}`).toBeLessThanOrEqual(TOLERANCE);


    await this.page.goBack();
  }
}
async captureExpectedScreenshots(start: number, end: number) {
  for (let i = start; i <= end; i++) {
    await this.all.nth(i).click();

    const width = await this.page.evaluate(() => window.innerWidth);
    const height = await this.page.evaluate(() => window.innerHeight);

    const screenshotPath = path.resolve(`C:\\Users\\User\\Documents\\k6try\\screenshots\\twohalve_${i}.png`);

    await this.page.screenshot({
      path: screenshotPath,
      clip: {
        x: 0,
        y: 0,
        width,
        height
      }
    });

    console.log(`✔️ נשמרה תמונת expected לעמוד ${i}: ${screenshotPath}`);

    await this.page.goBack();
  }
}

async e2e() { //בודק שהכמות איברים בפרונט זהה לבק
  // 1. פותחים את העמוד (שגורם לקריאת ה-API)
  await this.eventManagementButton.click();

  // 2. מחכים במקביל לתגובה מה-API
  const [response] = await Promise.all([
    this.page.waitForResponse(resp =>
      resp.url().includes('/TPSMOH.API/api/servicecall') &&
      resp.request().method() === 'POST' &&
      resp.status() === 200 &&
      (resp.request().postData() || '').length === 93
    ),
  ]);
  
  
  const apiJson = await response.json();
  const events = apiJson?.calls?.[0]?.callResult?.data ?? [];
  const backendCount = Array.isArray(events)
    ? events.filter(e => e.eventId !== undefined).length
    : 0;
  
  console.log('Count from API:', backendCount);
  await this.page.waitForSelector("//tr[@aria-selected='false']");
  const counter = await this.tr1.count();

  // 5. אם יש לחיצה נוספת שמשפיעה על הטבלה
  await this.page2.click();
  await this.page.waitForSelector("//tr[@aria-selected='false']");
  const counter2 = await this.tr1.count();


  const sum = 6 * counter + counter2;
  console.log('Count from UI:', sum);

  // 7. בדיקה שהמספרים שווים
  expect(sum).toBe(backendCount);
}


async e2eAddEventAndCheckItAppears() {
  // שלב 1: הגדרת המוק מראש כדי להשתמש בו גם בבדיקות בהמשך
  const mockEvent = {
    eventId: 501,
    eventName: "Marina 2027",
    status: 1,
    statusDate: "28/04/2025",
    statusName: "בהכנה",
    startDepName: "248. פיקוד 1",
    startDepCode: "248",
    creator: null,
    creatorRole: null,
    actual: 0,
    modelType: null,
    period: 1,
    periodName: "עונת 1",
    pikud: 188,
    pikudName: "כללי",
    startDate: "06/04/2025",
    endDate: "28/04/2025",
    potential: 19343,
    completed: 0,
    suspected: 0,
    disqualified: 0,
    approved: 0,
    id: 0,
    code: null,
    isActive: true,
    isDeleted: false,
    createdBy: null,
    createdOn: "0001-01-01T00:00:00",
    lastUpdateBy: null,
    version: "0001-01-01T00:00:00"
  };

  const mockResponse = {
    calls: [{
      callResult: {
        data: [mockEvent]
      }
    }]
  };

  // שלב 2: ניתוב הקריאה ל־API והחזרת המוק
  await this.page.route('**/TPSMOH.API/api/servicecall', async (route, request) => {
    if (
      request.method() === 'POST' &&
      (request.postData() || '').length === 93
    ) {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify(mockResponse),
      });
    } else {
      await route.continue();
    }
  });

  // שלב 3: כניסה לעמוד שמפעיל את הקריאה
  await this.eventManagementButton.click();

  // שלב 4: בדיקות – וידוא שהערכים מופיעים במסך כמו שצריך- client
  const statusText = await this.page.textContent('//*[@id="statusNameSpan501"]');
  expect(statusText?.trim()).toBe(mockEvent.statusName);

  const seasonText = await this.page.textContent("(//td[@aria-colindex='4'])[3]");
  expect(seasonText?.trim()).toBe(mockEvent.periodName);


  const nameText = await this.page.textContent("(//td[@aria-colindex='2'])[3]");
  expect(nameText?.trim()).toBe(mockEvent.eventName);

  
  const dateText = await this.page.textContent("(//span[@class='dx-template-wrapper'])[2]");
  expect(dateText).toContain(mockEvent.startDate);
  expect(dateText).toContain(mockEvent.endDate);


}

}
// .click();
// 
// //*[@id="statusNameSpan501"]
// 