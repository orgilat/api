import { test, expect, request, APIRequestContext } from '@playwright/test';

let apiContext: APIRequestContext;

test.beforeAll(async () => {
  apiContext = await request.newContext({
    baseURL: 'https://www.gov.il', // שים לב, לא amazon.com הרגיל
  });
});

test('GET product by ID returns product details', async () => {
  const response = await apiContext.get('/govilHF/api/GetChatResource?culture=he');
  expect(response.ok()).toBeTruthy();

  const data = await response.json();
  console.log(data);


});
