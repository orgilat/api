import { test, expect, request, APIRequestContext } from '@playwright/test';

let apiContext: APIRequestContext;

test.beforeAll(async () => {
  apiContext = await request.newContext({
    baseURL: 'https://www.gov.il',
    extraHTTPHeaders: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
      'Accept': 'application/json',
      'Referer': 'https://www.gov.il/',
      'Origin': 'https://www.gov.il',
    },
  });
});

test('GET GetChatResource returns chat configuration details', async () => {
  const response = await apiContext.get('/govilHF/api/GetChatResource?culture=he');

  // ודא שהתגובה הצליחה
  expect(response.ok(), `Request failed with status ${response.status()}`).toBeTruthy();

  const data = await response.json();

  // בדיקות בסיסיות למבנה הנתונים
  expect(data).toHaveProperty('title');
  expect(data).toHaveProperty('message');
  expect(data).toHaveProperty('notice');

  // הדפסה לצרכי debug (אפשר להסיר)
  console.log(JSON.stringify(data, null, 2));
});
