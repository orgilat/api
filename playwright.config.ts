import { defineConfig } from '@playwright/test';

export default defineConfig({
  timeout: 190000, // כל טסט מקבל עד 90 שניות
  expect: {
    timeout: 190000, // זמן המתנה ל-expectים
  },
  use: {
    headless: true, // אם אתה רוצה לראות את הדפדפן
    viewport: { width: 1281, height: 720 },
    ignoreHTTPSErrors: true,
    actionTimeout: 0, // בלי מגבלה לפעולות כמו click, fill
    
    video: {
      mode: 'on', // מקליט את כל הבדיקות
      size: { width: 1281, height: 720 }, // גודל הוידאו
    },
  },
  reporter: [
    ['list'], // מציג את התוצאות בטרמינל
    ['html', { outputFolder: 'playwright-report', open: 'never' }], // דוח HTML
    ['allure-playwright', { outputFolder: 'allure-results' }] // דוח Allure
  ],
  
});