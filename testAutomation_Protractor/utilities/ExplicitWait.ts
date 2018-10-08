import { protractor } from "protractor/built/ptor";
import {
  ProtractorExpectedConditions,
  ElementFinder,
  browser
} from "protractor";
import { logger } from "../utilities/loggerUtils";

export class ExplicitWait {
  static EC: ProtractorExpectedConditions = protractor.ExpectedConditions;
  //Waits for the element to be visbile
  static async visibilityOfElementWait(
    locator: ElementFinder,
    timeOut: number,
    elementLabel: string
  ) {
    await logger.info("Waiting for the visibility of element " + elementLabel);
    await browser.wait(ExplicitWait.EC.visibilityOf(locator), timeOut);
  }

  // Waits for the element to be clicked
  static async elementToBeClickable(
    locator: ElementFinder,
    timeOut: number,
    elementLabel: string
  ) {
    await logger.info(
      "Waiting for the element to be clickable " + elementLabel
    );
    await browser.wait(ExplicitWait.EC.elementToBeClickable(locator), timeOut);
  }

  static async titleContains(expectedResult: string, timeOut: number) {
    await logger.info(
      "Waiting for the browser title to contain " + expectedResult
    );
    await browser.wait(ExplicitWait.EC.titleContains(expectedResult), timeOut);
  }
}
