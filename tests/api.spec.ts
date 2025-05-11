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

test('Check if the response has a title', async () => {
  const response = await apiContext.get('/govilHF/api/GetChatResource?culture=he');

  // ודא שהתגובה הצליחה
  expect(response.ok()).toBeTruthy();

  const data = await response.json();

  // בדוק אם יש כותרת בתגובה
  expect(data).toHaveProperty('title');
});
