"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const loggerUtils_1 = require("./loggerUtils");
const protractor_1 = require("protractor");
const chai_1 = require("chai");
class Assert {
    /*
  Verify Text of the target element with the expected result
  */
    static verifyElementText(locator, expectedResult, elementLabel) {
        return __awaiter(this, void 0, void 0, function* () {
            yield loggerUtils_1.logger.info(`Verifying the  text on element ${elementLabel}`);
            let actualResult = yield locator.getText();
            chai_1.expect(actualResult).to.be.equal(expectedResult);
        });
    }
    /*
  Verify Sub-String of the target element with the expected result
  */
    static verifyElementContainsText(locator, expectedResult, elementLabel) {
        return __awaiter(this, void 0, void 0, function* () {
            yield loggerUtils_1.logger.info(`Verifying the  subtext on element ${elementLabel}`);
            let actualResult = yield locator.getText();
            chai_1.expect(actualResult).to.include(expectedResult);
        });
    }
    /*
  Verify Attribute of the target element with the expected result
  */
    static verifyElementAttribute(locator, attribute, expectedResult, elementLabel) {
        return __awaiter(this, void 0, void 0, function* () {
            yield loggerUtils_1.logger.info(`Verifying the  atribute ${attribute} on element ${elementLabel}`);
            let actualResult = yield locator.getAttribute(attribute);
            chai_1.expect(actualResult).to.be.equal(expectedResult);
        });
    }
    /*
  Verify Attribute of the target element with the expected result
  */
    static verifyBrowserTitleWindow(expectedResult) {
        return __awaiter(this, void 0, void 0, function* () {
            yield loggerUtils_1.logger.info(`Verifying the Browser Title Window `);
            let actualResult = yield protractor_1.browser.getTitle();
            chai_1.expect(actualResult).to.be.equal(expectedResult);
        });
    }
}
exports.Assert = Assert;
//# sourceMappingURL=Assert.js.map