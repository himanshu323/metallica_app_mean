import { logger } from "./loggerUtils";
import { expect, assert } from "chai";
import { ElementFinder, browser } from "protractor";

export class SoftAssert {
  static errorMessageBuffer: string[] = [];

  /*
Verify Text of the target element with the expected result
*/

  static async verifyElementText(
    locator: ElementFinder,
    expectedResult: string,
    elementLabel: string
  ) {
    try {
      await logger.info(`Verifying the  text on element ${elementLabel}`);
      let actualResult = await locator.getText();
      expect(actualResult).to.be.equal(expectedResult);
    } catch (error) {
      await console.log(error);
      await this.errorMessageBuffer.push(error);
    }
  }

  /*
Verify Sub-String of the target element with the expected result
*/

  static async verifyElementContainsText(
    locator: ElementFinder,
    expectedResult: string,
    elementLabel: string
  ) {
    try {
      await logger.info(`Verifying the  subtext on element ${elementLabel}`);
      let actualResult = await locator.getText();
      expect(actualResult).to.include(expectedResult);
    } catch (error) {
      await this.errorMessageBuffer.push(error);
    }
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
    try {
      await logger.info(
        `Verifying the  atribute ${attribute} on element ${elementLabel}`
      );
      let actualResult = await locator.getAttribute(attribute);
      expect(actualResult).to.be.equal(expectedResult);
    } catch (error) {
      await this.errorMessageBuffer.push(error);
    }
  }

  /*
Verify Attribute of the target element with the expected result
*/

  static async verifyBrowserTitleWindow(expectedResult: string) {
    try {
      await logger.info(`Verifying the Browser Title Window `);
      let actualResult = await browser.getTitle();
      expect(actualResult).to.be.equal(expectedResult);
    } catch (error) {
      await this.errorMessageBuffer.push(error);
    }
  }

  /**
   *
   * Check for errors
   */

  static async checkForErrors() {
    if (!(this.errorMessageBuffer.length === 0)) {
      let errorBuffer = this.errorMessageBuffer;

      this.errorMessageBuffer = [];

      assert.fail(
        "",
        "",
        "Overall  test failed because of the following errors \n" + errorBuffer
      );
    }
  }
}
