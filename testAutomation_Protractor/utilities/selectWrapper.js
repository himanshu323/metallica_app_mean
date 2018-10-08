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
const protractor_1 = require("protractor");
class SelectWrapper {
    constructor() {
        /* his.selector = selector;
     console.log("Added webelement" + selector); */
    }
    getAllOptions() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.WebElement.all(protractor_1.by.tagName("option"));
        });
    }
    selectByValue(value) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.WebElement.all(protractor_1.by.css("option[value='" + value + "']")).click();
        });
    }
    selectByText(element, text) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.WebElement.all(protractor_1.by.xpath("//option[.='" + text + "']")).click();
        });
    }
    selectByIndex(element, index) {
        return __awaiter(this, void 0, void 0, function* () {
            yield element.all(protractor_1.by.tagName("option")).get(index).click();
        });
    }
    selectByPartialText(element, partialText) {
        return __awaiter(this, void 0, void 0, function* () {
            yield element.all(protractor_1.by.cssContainingText("option", partialText)).click();
        });
    }
}
exports.SelectWrapper = SelectWrapper;
//# sourceMappingURL=selectWrapper.js.map