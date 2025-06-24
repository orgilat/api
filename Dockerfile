 # השתמש בתמונה בסיסית עם Playwright ו־Node
FROM mcr.microsoft.com/playwright:v1.44.0-jammy

# הגדרת ספריית העבודה
WORKDIR /app

# העתקת קבצי הפרויקט
COPY . .

# התקנת תלויות
RUN npm ci

# התקנת Allure ו־Playwright
RUN npm install -D @playwright/test allure-playwright

# התקנת כל התלויות של Playwright
RUN npx playwright install --with-deps

# הגדרת הפקודה הראשית להרצת הבדיקות עם דוח Allure
CMD ["npx", "playwright", "test", "--reporter=allure-playwright"]
