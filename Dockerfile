FROM mcr.microsoft.com/playwright:v1.44.0-jammy

WORKDIR /app

COPY . .

RUN npm ci

# לצורך Allure
RUN npm install -D @playwright/test allure-playwright

# הרצת טסטים עם דוח Allure
RUN npx playwright install --with-deps

CMD ["npx", "playwright", "test", "--reporter=allure-playwright"]
