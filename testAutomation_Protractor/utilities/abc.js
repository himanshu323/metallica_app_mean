"use strict";
/**
 * @author himanshuarora
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const loggerUtils_1 = require("./loggerUtils");
const basePage_1 = require("./basePage");
const ptor_1 = require("protractor/built/ptor");
var fs = require("fs");
class Actions {
    static enterTextOnElement(locator, value, elementLabel) {
        return __awaiter(this, void 0, void 0, function* () {
            yield loggerUtils_1.logger.info(`Entering ${value} on ${elementLabel}`);
            yield locator.clear();
            yield locator.sendKeys(value);
        });
    }
    /*
    Move to element then Clicks on the target element
    */
    static MoveNClickOnElement(locator, elementLabel) {
        return __awaiter(this, void 0, void 0, function* () {
            yield loggerUtils_1.logger.info(`Moving & Clicking on ${elementLabel}`);
            yield protractor_1.browser.actions().mouseMove(locator).click().perform();
        });
    }
    /*
     * Clicks  on the target hover element
     * */
    static clickOnHoverElement(locator, elementLabel) {
        return __awaiter(this, void 0, void 0, function* () {
            yield loggerUtils_1.logger.info(`Clicking on ${elementLabel}`);
            try {
                yield locator.click();
            }
            catch (error) {
                yield locator.click();
            }
        });
    }
    /*
    Clicks  on the target element
    */
    static clickOnElement(locator, elementLabel) {
        return __awaiter(this, void 0, void 0, function* () {
            yield loggerUtils_1.logger.info(`Clicking on ${elementLabel}`);
            yield locator.click();
        });
    }
    /*
     * Get text from 'value' Attribute
     * */
    static getValueFromAttribute(locator, attr, elementLabel) {
        return __awaiter(this, void 0, void 0, function* () {
            yield console.log(`Verifying the  subtext on element ${elementLabel}`);
            return yield locator.getAttribute(attr);
        });
    }
    /*
    * Clicks  on the target element via javascript
    **/
    static clickViaJavascript(locatorObject, index = 0, elementLabel) {
        return __awaiter(this, void 0, void 0, function* () {
            yield loggerUtils_1.logger.info(`Clicking on ${elementLabel}`);
            let executeClick;
            if (locatorObject.type == basePage_1.IdentificationType.ClassName) {
                yield loggerUtils_1.logger.info(`Clicking via class`);
                executeClick = `document.getElementsByClassName('${locatorObject.value}')[${index}].click()`;
            }
            else if (locatorObject.type == basePage_1.IdentificationType.ID) {
                yield loggerUtils_1.logger.info(`Clicking via ID`);
                executeClick = `document.getElementByID(${locatorObject.value}).click()`;
            }
            else if (locatorObject.type == basePage_1.IdentificationType.TagName) {
                yield loggerUtils_1.logger.info(`Clicking via tagname`);
                executeClick = `document.getElementsByTagName(${locatorObject.value})[${index}].click()`;
            }
            yield loggerUtils_1.logger.info(`Clicking via tagname ${executeClick}`);
            return yield protractor_1.browser.executeScript(executeClick);
        });
    }
    /*
     *  * Get text from element
     *   * */
    static getTextFromElement(locator, elementLabel) {
        return __awaiter(this, void 0, void 0, function* () {
            yield console.log(` the  text on element ${elementLabel}`);
            return yield locator.getText().then(txt => txt);
        });
    }
    static multiSelect(placeHolderValue, ...values) {
        return __awaiter(this, void 0, void 0, function* () {
            let selectLabel = yield protractor_1.element(protractor_1.by.xpath(`//mat-select[@placeholder='${placeHolderValue}']`));
            yield protractor_1.browser.executeScript('arguments[0].click()', selectLabel);
            for (let i = 0; i < values.length; i++) {
                let selectElement = yield protractor_1.element(protractor_1.by.xpath(`//mat-option//span[@class='mat-option-text'][text()='${values[i].toUpperCase()}']//preceding-sibling::mat-pseudo-checkbox`));
                yield protractor_1.browser.executeScript('arguments[0].click()', selectElement);
            }
            yield protractor_1.browser.actions().sendKeys(ptor_1.protractor.Key.ESCAPE).perform();
            let plusIcon = yield protractor_1.element(protractor_1.by.xpath(`//mat-select[@placeholder='${placeHolderValue}']//ancestor::mat-form-field//following-sibling::button`));
            yield plusIcon.click();
            let sidePadLocator = `//mat-select[@placeholder='${placeHolderValue}']//ancestor::div[contains(@class,'noSidePad')][1]//following-sibling::div[contains(@class,'noSidePad')][1]//span[contains(@class,'onlySidePad')]`;
            yield protractor_1.element.all(protractor_1.by.xpath(sidePadLocator)).each((sidePad) => __awaiter(this, void 0, void 0, function* () {
                let elementValue = yield sidePad.getText();
                yield loggerUtils_1.logger.info(`${elementValue} is selected`);
            }));
        });
    }
    static singleSelect(placeHolderValue, value) {
        return __awaiter(this, void 0, void 0, function* () {
            let selectLabel = yield protractor_1.element(protractor_1.by.xpath(`//mat-select[@placeholder='${placeHolderValue}']`));
            yield protractor_1.browser.executeScript('arguments[0].click()', selectLabel);
            let selectElement = yield protractor_1.element(protractor_1.by.xpath(`//mat-option//span[@class='mat-option-text'][text()='${value.toUpperCase()}']`));
            yield protractor_1.browser.executeScript('arguments[0].click()', selectElement);
        });
    }
    static getSingleSelectValues(placeHolderValue, ...values) {
        return __awaiter(this, void 0, void 0, function* () {
            let selectLabel = yield protractor_1.element(protractor_1.by.xpath(`//mat-select[@placeholder='${placeHolderValue}']`));
            yield protractor_1.browser.executeScript('arguments[0].click()', selectLabel);
            for (let i = 0; i < values.length; i++) {
                let selectElement = yield protractor_1.element(protractor_1.by.xpath(`//mat-option//span[@class='mat-option-text'][text()='${values[i].toUpperCase()}']`));
            }
            let selctElementToClick = yield protractor_1.element(protractor_1.by.xpath(`//mat-option//span[@class='mat-option-text'][text()='${values[0].toUpperCase()}']`));
            yield protractor_1.browser.executeScript('arguments[0].click()', selctElementToClick);
            //let selectElement = await element(by.xpath(`//mat-option//span[@class='mat-option-text'][text()='${value.toUpperCase()}']`));
        });
    }
    static multiSelectFromGeneralTab(placeHolderValue, ...values) {
        return __awaiter(this, void 0, void 0, function* () {
            let selectLabel = yield protractor_1.element(protractor_1.by.xpath(`//mat-select[@placeholder='${placeHolderValue}']`));
            yield protractor_1.browser.executeScript('arguments[0].click()', selectLabel);
            for (let i = 0; i < values.length; i++) {
                let selectElement = yield protractor_1.element(protractor_1.by.xpath(`//mat-option//span[@class='mat-option-text'][text()='${values[i].toUpperCase()}']//preceding-sibling::mat-pseudo-checkbox`));
                yield protractor_1.browser.executeScript('arguments[0].click()', selectElement);
            }
            yield protractor_1.browser.actions().sendKeys(ptor_1.protractor.Key.ESCAPE).perform();
            let plusIcon = yield protractor_1.element(protractor_1.by.xpath(`//mat-select[@placeholder='${placeHolderValue}']//ancestor::mat-form-field//following-sibling::button`));
            yield plusIcon.click();
            let sidePadLocator = `//mat-select[@placeholder='${placeHolderValue}']//ancestor::div[contains(@class,'noSidePad')][1]//following-sibling::div[contains(@class,'noSidePad')][1]//span[contains(@class,'onlySidePad')]`;
            yield protractor_1.element.all(protractor_1.by.xpath(sidePadLocator)).each((sidePad) => __awaiter(this, void 0, void 0, function* () {
                let elementValue = yield sidePad.getText();
                yield loggerUtils_1.logger.info(`${elementValue} is selected`);
            }));
        });
    }
}
exports.Actions = Actions;
//# sourceMappingURL=abc.js.map