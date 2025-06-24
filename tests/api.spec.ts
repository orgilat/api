import { test, expect } from './fixtures';  // ייבוא מה־fixture שהכנת
import { allure } from 'allure-playwright';
import { logger } from '../Logger';

test.describe(() => {

  // לפני כל טסט, נעשה את 3 הפעולות האלו
  test.beforeEach(async ({ flowpage }) => {
    logger.info('הטסט התחיל');
    await flowpage.goto();
    await flowpage.login('MARINAS', 'Ms123456');
    await flowpage.goToSociometricManagement();
  });

  test('בדיקה פלואו - בחירת מודל חישוב', async ({ flowpage }) => {
    allure.description("The test case navigates to survey management and then to seasons screen");
    allure.owner("or gilat");
    allure.severity('critical');

    await allure.step('מעבר לעמוד ניהול הסקר', async () => {
      await flowpage.four();
    });
  });

  test('בדיקה פלואו: מעבר לניהול הסקר ואז למסך עונות', async ({ flowpage }) => {
    allure.description("The test case navigates to survey management and then to seasons screen");
    allure.owner("or gilat");
    allure.severity('critical');

    await allure.step('מעבר לעמוד ניהול הסקר', async () => {
      await flowpage.five();
    });
  });

  test('בדיקה פלואו: מעבר לניהול הסקר  למסך עונות', async ({ flowpage }) => {
    allure.description("The test case navigates to survey management and then to seasons screen");
    allure.owner("or gilat");
    allure.severity('critical');

    await allure.step('מעבר לעמוד ניהול הסקר', async () => {
      await flowpage.six();
    });
  });

  test('page 1', async ({ flowpage }) => {
    allure.description("The test case navigates to survey management and then to seasons screen");
    allure.owner("or gilat");
    allure.severity('critical');

    await allure.step('מעבר לעמוד ניהול הסקר', async () => {
      await flowpage.seven();
    });
  });

  test('page 2', async ({ flowpage }) => {
    allure.description("The test case navigates to survey management and then to seasons screen");
    allure.owner("or gilat");
    allure.severity('critical');

    await allure.step('מעבר לעמוד ניהול הסקר', async () => {
      await flowpage.eight();
    });
  });

  test('page 4', async ({ flowpage }) => {
    allure.description("The test case navigates to survey management and then to seasons screen");
    allure.owner("or gilat");
    allure.severity('critical');

    await allure.step('מעבר לעמוד ניהול הסקר', async () => {
      await flowpage.nine();
    });
  });

  test('page 5', async ({ flowpage }) => {
    allure.description("The test case navigates to survey management and then to seasons screen");
    allure.owner("or gilat");
    allure.severity('critical');

    await allure.step('מעבר לעמוד ניהול הסקר', async () => {
      await flowpage.ten();
    });
  });

  test('page 6', async ({ flowpage }) => {
    allure.description("The test case navigates to survey management and then to seasons screen");
    allure.owner("or gilat");
    allure.severity('critical');

    await allure.step('מעבר לעמוד ניהול הסקר', async () => {
      await flowpage.ele();
    });
  });
 test('page 7', async ({ flowpage }) => {
    allure.description("The test case navigates to survey management and then to seasons screen");
    allure.owner("or gilat");
    allure.severity('critical');

    await allure.step('מעבר לעמוד ניהול הסקר', async () => {
      await flowpage.eleven();
    });
  });
   test('page 8', async ({ flowpage }) => {
    allure.description("The test case navigates to survey management and then to seasons screen");
    allure.owner("or gilat");
    allure.severity('critical');

    await allure.step('מעבר לעמוד ניהול הסקר', async () => {
      await flowpage.eleven2();
    });
  });
    test('page 9', async ({ flowpage }) => {
    allure.description("The test case navigates to survey management and then to seasons screen");
    allure.owner("or gilat");
    allure.severity('critical');

    await allure.step('מעבר לעמוד ניהול הסקר', async () => {
      await flowpage.eleven3();
    });
  });
    test('page 10', async ({ flowpage }) => {
    allure.description("The test case navigates to survey management and then to seasons screen");
    allure.owner("or gilat");
    allure.severity('critical');

    await allure.step('מעבר לעמוד ניהול הסקר', async () => {
      await flowpage.eleven4();
    });
  });


    test('page 11', async ({ flowpage }) => {
    allure.description("The test case navigates to survey management and then to seasons screen");
    allure.owner("or gilat");
    allure.severity('critical');

    await allure.step('מעבר לעמוד ניהול הסקר', async () => {
      await flowpage.eleven6();
    });
  });
    test('page 12', async ({ flowpage }) => {
    allure.description("The test case navigates to survey management and then to seasons screen");
    allure.owner("or gilat");
    allure.severity('critical');

    await allure.step('מעבר לעמוד ניהול הסקר', async () => {
      await flowpage.eleven7();
    });
  });
      test('page 13', async ({ flowpage }) => {
    allure.description("The test case navigates to survey management and then to seasons screen");
    allure.owner("or gilat");
    allure.severity('critical');

    await allure.step('מעבר לעמוד ניהול הסקר', async () => {
      await flowpage.eleven8();
    });
  });
      test('page 14', async ({ flowpage }) => {
    allure.description("The test case navigates to survey management and then to seasons screen");
    allure.owner("or gilat");
    allure.severity('critical');

    await allure.step('מעבר לעמוד ניהול הסקר', async () => {
      await flowpage.eleven9();
    });
  });
    test('page 15', async ({ flowpage }) => {
    allure.description("The test case navigates to survey management and then to seasons screen");
    allure.owner("or gilat");
    allure.severity('critical');

    await allure.step('מעבר לעמוד ניהול הסקר', async () => {
      await flowpage.eleven11();
    });
  });
     test('page 16', async ({ flowpage }) => {
    allure.description("The test case navigates to survey management and then to seasons screen");
    allure.owner("or gilat");
    allure.severity('critical');

    await allure.step('מעבר לעמוד ניהול הסקר', async () => {
      await flowpage.eleven12();
    });
  });
           test('page 17', async ({ flowpage }) => {
    allure.description("The test case navigates to survey management and then to seasons screen");
    allure.owner("or gilat");
    allure.severity('critical');

    await allure.step('מעבר לעמוד ניהול הסקר', async () => {
      await flowpage.eleven13();
    });
  });     test('page 18', async ({ flowpage }) => {
    allure.description("The test case navigates to survey management and then to seasons screen");
    allure.owner("or gilat");
    allure.severity('critical');

    await allure.step('מעבר לעמוד ניהול הסקר', async () => {
      await flowpage.eleven14();
    });
  });
test('page 19', async ({ flowpage }) => {
    allure.description("The test case navigates to survey management and then to seasons screen");
    allure.owner("or gilat");
    allure.severity('critical');

    await allure.step('מעבר לעמוד ניהול הסקר', async () => {
      await flowpage.eleven15();
    });
  });
  test('page 20', async ({ flowpage }) => {
    allure.description("The test case navigates to survey management and then to seasons screen");
    allure.owner("or gilat");
    allure.severity('critical');

    await allure.step('מעבר לעמוד ניהול הסקר', async () => {
      await flowpage.eleven16();
    });
  });
    test('page 21', async ({ flowpage }) => {
    allure.description("The test case navigates to survey management and then to seasons screen");
    allure.owner("or gilat");
    allure.severity('critical');

    await allure.step('מעבר לעמוד ניהול הסקר', async () => {
      await flowpage.eleven17();
    });
  });
      test('page 22', async ({ flowpage }) => {
    allure.description("The test case navigates to survey management and then to seasons screen");
    allure.owner("or gilat");
    allure.severity('critical');

    await allure.step('מעבר לעמוד ניהול הסקר', async () => {
      await flowpage.eleven18();
    });
  });
     test('page 23', async ({ flowpage }) => {
    allure.description("The test case navigates to survey management and then to seasons screen");
    allure.owner("or gilat");
    allure.severity('critical');

    await allure.step('מעבר לעמוד ניהול הסקר', async () => {
      await flowpage.eleven19();
    });
  });
     test('page 24', async ({ flowpage }) => {
    allure.description("The test case navigates to survey management and then to seasons screen");
    allure.owner("or gilat");
    allure.severity('critical');

    await allure.step('מעבר לעמוד ניהול הסקר', async () => {
      await flowpage.eleven20();
    });
  });
      test('page 25', async ({ flowpage }) => {
    allure.description("The test case navigates to survey management and then to seasons screen");
    allure.owner("or gilat");
    allure.severity('critical');

    await allure.step('מעבר לעמוד ניהול הסקר', async () => {
      await flowpage.eleven21();
    });
  });
      test('page 26', async ({ flowpage }) => {
    allure.description("The test case navigates to survey management and then to seasons screen");
    allure.owner("or gilat");
    allure.severity('critical');

    await allure.step('מעבר לעמוד ניהול הסקר', async () => {
      await flowpage.eleven22();
    });
  });
     test('page 27', async ({ flowpage }) => {
    allure.description("The test case navigates to survey management and then to seasons screen");
    allure.owner("or gilat");
    allure.severity('critical');

    await allure.step('מעבר לעמוד ניהול הסקר', async () => {
      await flowpage.eleven23();
    });
  });
    test('page 28', async ({ flowpage }) => {
    allure.description("The test case navigates to survey management and then to seasons screen");
    allure.owner("or gilat");
    allure.severity('critical');

    await allure.step('מעבר לעמוד ניהול הסקר', async () => {
      await flowpage.eleven24();
    });
  });
  test('pic 1', async ({ flowpage }) => {
    allure.description("The test case navigates to survey management and then to seasons screen");
    allure.owner("or gilat");
    allure.severity('critical');

    await allure.step('מעבר לעמוד ניהול הסקר', async () => {
      await flowpage.compareScreenshots(6, 10);
    });
  });
    test('pic 2', async ({ flowpage }) => {
    allure.description("The test case navigates to survey management and then to seasons screen");
    allure.owner("or gilat");
    allure.severity('critical');

    await allure.step('מעבר לעמוד ניהול הסקר', async () => {
      await flowpage.compareScreenshots(10, 15);
    });
  });

  test('pic3', async ({ flowpage }) => {
    allure.description("The test case navigates to survey management and then to seasons screen");
    allure.owner("or gilat");
    allure.severity('critical');

    await allure.step('מעבר לעמוד ניהול הסקר', async () => {
      await flowpage.compareScreenshots(17, 22);
    });
  });
  test('pic4', async ({ flowpage }) => {
    allure.description("The test case navigates to survey management and then to seasons screen");
    allure.owner("or gilat");
    allure.severity('critical');

    await allure.step('מעבר לעמוד ניהול הסקר', async () => {
      await flowpage.compareScreenshots(22, 27);
    });
  });
test.describe('e2e', () => {

  test('e2e+api', async ({ flowpage }) => {
    allure.description("the first e2e test checking the same amount of events both front and back");
    allure.owner("or gilat");
    allure.severity('critical');

    await allure.step('מעבר לעמוד ניהול הסקר', async () => {
      await flowpage.e2e();
    });
  });

  test('e2e+api2', async ({ flowpage }) => {
    allure.description("the second e2e test- validate api structure - validate each field is related to the front- which with the last test promise- every field of every event is perfectly executed");
    allure.owner("or gilat");
    allure.severity('critical');

    await allure.step('מעבר לעמוד ניהול הסקר', async () => {
      await flowpage.e2eAddEventAndCheckItAppears();
    });
  });

});


});
