import { logger } from "./loggerUtils";
import { browser, ElementFinder } from "protractor";
import { expect } from "chai";
import { SoftAssert } from "./SoftAssert";

export class Assert {
  /*
Verify Text of the target element with the expected result
*/

  static async verifyElementText(
    locator: ElementFinder,
    expectedResult: string,
    elementLabel: string
  ) {
    await logger.info(`Verifying the  text on element ${elementLabel}`);
    let actualResult = await locator.getText();
    expect(actualResult).to.be.equal(expectedResult);
  }

  /*
Verify Sub-String of the target element with the expected result
*/

  static async verifyElementContainsText(
    locator: ElementFinder,
    expectedResult: string,
    elementLabel: string
  ) {
    await logger.info(`Verifying the  subtext on element ${elementLabel}`);
    let actualResult = await locator.getText();
    expect(actualResult).to.include(expectedResult);
  }

  /*
Verify Attribute of the target element with the expected result
*/

  static async verifyElementAttribute(
    locator: ElementFinder,
    attribute: string,
    expectedResult: string,
    elementLabel: string
  ) {
    await logger.info(
      `Verifying the  atribute ${attribute} on element ${elementLabel}`
    );
    let actualResult = await locator.getAttribute(attribute);
    expect(actualResult).to.be.equal(expectedResult);
 
  }

  /*
Verify Attribute of the target element with the expected result
*/

  static async verifyBrowserTitleWindow(expectedResult: string) {
    await logger.info(`Verifying the Browser Title Window `);
    let actualResult = await browser.getTitle();
    expect(actualResult).to.be.equal(expectedResult);
  }
}
