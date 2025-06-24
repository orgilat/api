# Test info

- Name: בדיקה פלואו: מעבר לניהול הסקר ואז למסך עונות
- Location: C:\Users\User\Documents\k6try\tests\api.spec.ts:21:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('div.dropdown.dropdown-select[label="No-Text period"]')
    - locator resolved to <div label="No-Text period" class="dropdown dropdown-select">…</div>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div data-bind="dxControlsDescendantBindings: true" class="dx-overlay-wrapper dx-loadpanel-wrapper dx-overlay-shader">…</div> intercepts pointer events
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div data-bind="dxControlsDescendantBindings: true" class="dx-overlay-wrapper dx-loadpanel-wrapper dx-overlay-shader">…</div> intercepts pointer events
    - retrying click action
      - waiting 100ms
    59 × waiting for element to be visible, enabled and stable
       - element is visible, enabled and stable
       - scrolling into view if needed
       - done scrolling
       - <div data-bind="dxControlsDescendantBindings: true" class="dx-overlay-wrapper dx-loadpanel-wrapper dx-overlay-shader">…</div> intercepts pointer events
     - retrying click action
       - waiting 500ms

    at FlowPage.five (C:\Users\User\Documents\k6try\pages\FlowPage.ts:177:31)
    at C:\Users\User\Documents\k6try\tests\api.spec.ts:31:5
    at C:\Users\User\Documents\k6try\tests\api.spec.ts:26:3
```

# Test source

```ts
   77 |         this.recruit = page.locator('div.dropdown-btn.text-box[data-label-val="No-Text pikud"]');
   78 |         this.recruitOption = page.locator('span:has-text("כללי")');
   79 |         this.mateS = page.locator('div.dropdown-btn.text-box[data-label-val="הגדרת סוג היחידה לאירוע "]');
   80 |         this.mateC = page.locator('span:has-text("מטה")');
   81 |         this.pikud1 = page.locator(
   82 |             'li[role="treeitem"][aria-label="פיקוד 1"] >> div[role="checkbox"]'
   83 |           );
   84 |           this.list22 = page.locator(
   85 |             'div.col-4:has(div.section_title:has-text("בחירת יחידות מאגדות להצגת דוח מילוי"))'
   86 |           );
   87 |         
   88 |           // מתוך אותו קונטיינר – מגדירים את ה־checkbox של אוגדה 1
   89 |                this.ogda1 = this.list2.locator(
   90 |             'li[role="treeitem"][aria-label="אוגדה 1"] >> div.dx-checkbox-container'
   91 |           );
   92 |         
   93 |        
   94 |         
   95 |         
   96 |                 this.startDateButton = page.locator(
   97 |                     '#layout > div > div.app_content > div > main > div > div:nth-child(9) > div > div:nth-child(1) > div > div.dx-dropdowneditor-input-wrapper > div > div.dx-texteditor-buttons-container > div.dx-widget.dx-button-mode-contained.dx-button-normal.dx-rtl.dx-dropdowneditor-button'
   98 |                 );
   99 |                 this.endDateButton = page.locator(
  100 |                     '#layout > div > div.app_content > div > main > div > div:nth-child(9) > div > div:nth-child(2) > div > div.dx-dropdowneditor-input-wrapper > div > div.dx-texteditor-buttons-container > div.dx-widget.dx-button-mode-contained.dx-button-normal.dx-rtl.dx-dropdowneditor-button'
  101 |                 );
  102 |         
  103 |         
  104 |         
  105 |                 this.end1 = page.locator('#layout > div > div.app_content > div > main > div > div:nth-child(22) > div.questions_section > div:nth-child(2) > div');
  106 |                 
  107 |                 this.end3 = page.locator('#layout > div > div.app_content > div > main > div > div:nth-child(22) > div.questions_section > div:nth-child(6) > div');
  108 |                 
  109 |                 this.final = page.locator('div.q-tab__label:has-text("ניהול פוטנציאל")');
  110 |         
  111 |            this.calculate = page.getByRole('button', { name: 'חשב פוטנציאל מחדש' });
  112 |     this.show = page.getByRole('button', { name: 'הצג פוטנציאל' })
  113 |     this.show1 = page.getByRole('button', { name: 'הצג פוטנציאל' })  
  114 |  
  115 |     this.f1 = page.getByRole('button', { name: 'Select' }).nth(1)
  116 |     this.f2= page.getByText('לא', { exact: true })
  117 |     this.f4= page.getByText('close')
  118 |     this.all = page.locator('//input[@type="button"]');
  119 |     this.must = page.locator(' input[value="שאלות חובה לסוציומטרי"]');
  120 |     this.must2 = page.locator('input[value="שדות לפילטור הפוטנציאל"]');
  121 |     this.must3= page.locator('//div[@class="page-title"]//span[1]');
  122 |     this.must4= page.locator('input[type="submit"]');
  123 |     this.must5= page.locator('table.tablestyle');
  124 |     this.must6= page.locator('(//div[@class="ss-single"])[1]');
  125 |     this.must7= page.locator('(//div[@class="ss-single"])[2]');
  126 |     this.must8= page.locator("button[title='חריגות בגין מידת היכרות']");
  127 |     this.must9= page.locator('#myBtn');
  128 |     this.must10= page.locator("(//div[@class='text-center']//label)");
  129 |     this.must11= page.locator("#mainTable");
  130 |     this.must12 = page.locator("(//form[@method='POST']//label)");
  131 |     this.must13 = page.locator("(//div[@class='ss-main btn'])");
  132 |     
  133 |   }
  134 |  
  135 |   async goto() {
  136 |     await this.page.goto('https://www.survey.co.il/pms/MMDANEW/default.asp');
  137 |   }
  138 |
  139 |   async login(username: string, password: string) {
  140 |     await this.loginInput.fill(username);
  141 |     await this.passwordInput.fill(password);
  142 |     await this.submitButton.click();
  143 |     await this.page.waitForTimeout(1001);
  144 |   }
  145 |
  146 |   async goToSociometricManagement() {
  147 |     await this.surveyAdminLink.hover();
  148 |     await this.sociometricLink.click();
  149 |    
  150 |
  151 |   }
  152 |   async four() {
  153 |     await this.modelingButton.scrollIntoViewIfNeeded()
  154 |     await this.modelingButton.click();
  155 |     await this.modelingButton1.click();
  156 |     await this.list.locator('div.ss-option').nth(1).click();
  157 |    await this.list1.hover()
  158 |    await this.list2.click()
  159 |    
  160 |   
  161 |   }
  162 |   async five() {
  163 |     await this.eventManagementButton.click();
  164 |     await this.createNewEventButton.click();
  165 |     await this.eventNameInput.waitFor({ state: 'visible' });
  166 |     await this.eventNameInput.click({ force: true });
  167 |     await this.page.waitForTimeout(200); // זמן קטן לייצוב
  168 |     await this.eventNameInput.fill(''); // לנקות את השדה
  169 |     await this.page.waitForTimeout(200); // עוד זמן קטן
  170 |     await this.page.keyboard.type('מרינה 2025', { delay: 150 });
  171 |     await expect(this.eventNameInput).toHaveValue('מרינה 2025', { timeout: 5000 });
  172 |
  173 |
  174 |     await expect(this.eventNameInput).toHaveValue('מרינה 2025', { timeout: 5000 });
  175 |
  176 |
> 177 |     await this.seasonDropdown.click();
      |                               ^ Error: locator.click: Target page, context or browser has been closed
  178 |     await this.seasonOption.click();
  179 |     // הוספת בחירת עונה כאן אם צריך
  180 |
  181 |     // בחירת תאריך התחלה
  182 |     await this.startDateButton.click();
  183 |     await this.page.keyboard.press('Enter');   // בחירת תאריך סיום
  184 |     await this.endDateButton.click();
  185 |     await this.page.keyboard.press('Enter');
  186 |     await this.recruit.click();
  187 |     await this.recruitOption.click();
  188 |     logger.info('we came to the end');
  189 |     await this.mateS.click();
  190 |     logger.info('worked');
  191 |     await this.mateC.click();
  192 |     await this.pikud1.click();
  193 |     logger.info('פיקוד אחד נלחץ');
  194 |     await this.page.waitForTimeout(2000)
  195 |     await this.page.locator('div:nth-child(18) > .dx-treeview-with-search > .dx-scrollable > .dx-scrollable-wrapper > .dx-scrollable-container > .dx-scrollable-content > ul > li > .dx-treeview-node-container > li > .dx-widget').first().click();
  196 |     logger.info('אוגדה 1 נלחצה');
  197 |     await this.page.waitForTimeout(2500);
  198 |     await this.end1.scrollIntoViewIfNeeded();  // הגלילה כדי לוודא שהאלמנט גלוי
  199 |     await this.end1.click({ force: true });
  200 |     await this.page.waitForTimeout(2500);
  201 |   
  202 |     await this.end3.scrollIntoViewIfNeeded();  // הגלילה כדי לוודא שהאלמנט גלוי
  203 |     await this.end3.click({ force: true });
  204 |     await this.page.waitForTimeout(2500);
  205 |     await this.final.scrollIntoViewIfNeeded();  // הגלילה כדי לוודא שהאלמנט גלוי
  206 |     await this.final.click({ force: true });
  207 |     await this.page.waitForTimeout(2500);
  208 |     await this.calculate.click();
  209 |     await this.show.click();
  210 |     await this.f1.waitFor({ state: 'visible' });
  211 |     await this.f1.click();
  212 |     await this.f2.waitFor({ state: 'visible' });
  213 |     await this.f2.click();
  214 |     await this.f4.waitFor({ state: 'visible' });
  215 |     await this.f4.click();
  216 |     await this.show1.waitFor({ state: 'visible' });
  217 |     await this.show1.click();
  218 |   }
  219 |   async six() {
  220 |
  221 |  await this.all.nth(0).click()
  222 |  await expect(this.must).toBeVisible()
  223 |  await expect(this.must2).toBeVisible()
  224 |
  225 | }
  226 | async seven() {
  227 |
  228 |   await this.all.nth(1).click()
  229 |   await expect(this.must3).toBeVisible()
  230 |   await expect(this.must3).toContainText("קביעת שאלות חובה")
  231 |   await expect(this.must4).toBeVisible()
  232 |   await expect(this.must5).toBeVisible()
  233 |  }
  234 |  async eight() {
  235 |
  236 |   await this.all.nth(2).click()
  237 |   await expect(this.must3).toContainText("שדות לניהול פוטנציאל")
  238 |   await expect(this.must6).toBeVisible()
  239 |   await expect(this.must6).toContainText("סוציומטרי")
  240 |   await expect(this.must7).toContainText("מספר אישי")
  241 |  
  242 | }
  243 |  async nine() {
  244 |
  245 |   await this.all.nth(3).click()
  246 |   await expect(this.must3).toContainText("קביעת חוקים לבדיקת שאלונים לא תקינים: ")
  247 |   await expect(this.must5).toBeVisible()
  248 |   await expect(this.must8).toBeVisible()
  249 |   await this.must8.click()
  250 |   await expect(this.page).toHaveURL('https://www.survey.co.il/pms/MMDANEW/sm_minMaxAnswerRules.asp');
  251 |
  252 |  
  253 |  }
  254 |  async ten() {
  255 |
  256 |   await this.all.nth(4).click()
  257 |   await expect(this.must9).toBeVisible()
  258 |   await this.must9.click()
  259 |   const count = await this.must10.count();
  260 |   await expect(count).toBe(24);
  261 |   await expect(this.must11).toBeVisible()
  262 |
  263 |
  264 |  
  265 |  }
  266 |  async ele() {
  267 |   await this.all.nth(5).click();
  268 |   await expect(this.must3).toContainText("כללי השתתפות ");
  269 |   const screenshotPath = path.resolve('C:\\Users\\User\\Documents\\k6try\\screenshots\\ele_actual.png');
  270 |   await this.page.screenshot({ path: screenshotPath, clip: { x: 0, y: 0, width: await this.page.evaluate(() => window.innerWidth), height: 1000 } });
  271 |
  272 |   // טען את תמונת ה-expected הקיימת
  273 |   const expectedPath = path.resolve('C:\\Users\\User\\Documents\\k6try\\screenshots\\ele.png');
  274 |   const expectedImage = PNG.sync.read(fs.readFileSync(expectedPath));
  275 |   const actualImage = PNG.sync.read(fs.readFileSync(screenshotPath));
  276 |
  277 |   const { width, height } = expectedImage;
```