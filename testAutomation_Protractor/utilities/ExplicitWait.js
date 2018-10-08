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
const ptor_1 = require("protractor/built/ptor");
const protractor_1 = require("protractor");
const loggerUtils_1 = require("../utilities/loggerUtils");
class ExplicitWait {
    //Waits for the element to be visbile
    static visibilityOfElementWait(locator, timeOut, elementLabel) {
        return __awaiter(this, void 0, void 0, function* () {
            yield loggerUtils_1.logger.info("Waiting for the visibility of element " + elementLabel);
            yield protractor_1.browser.wait(ExplicitWait.EC.visibilityOf(locator), timeOut);
        });
    }
    // Waits for the element to be clicked
    static elementToBeClickable(locator, timeOut, elementLabel) {
        return __awaiter(this, void 0, void 0, function* () {
            yield loggerUtils_1.logger.info("Waiting for the element to be clickable " + elementLabel);
            yield protractor_1.browser.wait(ExplicitWait.EC.elementToBeClickable(locator), timeOut);
        });
    }
    static titleContains(expectedResult, timeOut) {
        return __awaiter(this, void 0, void 0, function* () {
            yield loggerUtils_1.logger.info("Waiting for the browser title to contain " + expectedResult);
            yield protractor_1.browser.wait(ExplicitWait.EC.titleContains(expectedResult), timeOut);
        });
    }
}
ExplicitWait.EC = ptor_1.protractor.ExpectedConditions;
exports.ExplicitWait = ExplicitWait;
//# sourceMappingURL=ExplicitWait.js.map