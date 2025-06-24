import { test as baseTest } from '@playwright/test';
import { FlowPage } from '../pages/FlowPage';

type Pages = {
  flowpage: FlowPage;
};

// יוצרים test חדש עם fixture מותאם אישית עבור FlowPage
export const test = baseTest.extend<Pages>({
  flowpage: async ({ page }, use) => {
    await use(new FlowPage(page));
  },
});

// אין צורך לייבא שוב את expect, זה כבר קיים מתוך test המורחב!
export const expect = test.expect;
