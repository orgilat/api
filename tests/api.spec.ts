import { test, expect, request, APIRequestContext } from '@playwright/test';

let apiContext: APIRequestContext;

test.beforeAll(async () => {
  // יצירת קונטקסט חדש לבקשות API
  apiContext = await request.newContext({
    baseURL: 'https://moovitapp.com/index/api/location/search',
    extraHTTPHeaders: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  });
});

test('Send POST request and print the response body', async () => {
  // נתונים שנשלחים ב-POST (במקרה הזה לדוגמה)
  const postData = {
    location: "Tel Aviv", // דוגמה בלבד
  };

  // שליחת בקשת POST עם הנתונים
  const response = await apiContext.post('', {
    data: postData,
  });

  // מוודא שהבקשה הצליחה (סטטוס 200)
  expect(response.ok(), `Request failed with status ${response.status()}`).toBeTruthy();

  // הדפסת התשובה המתקבלת (הגולמית)
  const data = await response.json();
  console.log(data); // כאן תראה את התשובה
});
