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
const customLocator_1 = require("./customLocator");
const logger = require("winston");
var IdentificationType;
(function (IdentificationType) {
    IdentificationType[IdentificationType["Name"] = 0] = "Name";
    IdentificationType[IdentificationType["ID"] = 1] = "ID";
    IdentificationType[IdentificationType["ClassName"] = 2] = "ClassName";
    IdentificationType[IdentificationType["Xpath"] = 3] = "Xpath";
    IdentificationType[IdentificationType["Css"] = 4] = "Css";
    IdentificationType[IdentificationType["LinkText"] = 5] = "LinkText";
    IdentificationType[IdentificationType["PartialLinkText"] = 6] = "PartialLinkText";
    IdentificationType[IdentificationType["ButtonText"] = 7] = "ButtonText";
    IdentificationType[IdentificationType["NgShow"] = 8] = "NgShow";
    IdentificationType[IdentificationType["NgClick"] = 9] = "NgClick";
    IdentificationType[IdentificationType["Model"] = 10] = "Model";
})(IdentificationType = exports.IdentificationType || (exports.IdentificationType = {}));
class BasePage {
    ElementLocator(obj) {
        switch (obj.type) {
            case IdentificationType[IdentificationType.Xpath]:
                return protractor_1.element(protractor_1.by.xpath(obj.value));
            case IdentificationType[IdentificationType.Css]:
                return protractor_1.element(protractor_1.by.css(obj.value));
            case IdentificationType[IdentificationType.Name]:
                return protractor_1.element(protractor_1.by.name(obj.value));
            case IdentificationType[IdentificationType.ID]:
                return protractor_1.element(protractor_1.by.id(obj.value));
            case IdentificationType[IdentificationType.LinkText]:
                return protractor_1.element(protractor_1.by.linkText(obj.value));
            case IdentificationType[IdentificationType.PartialLinkText]:
                return protractor_1.element(protractor_1.by.partialLinkText(obj.value));
            case IdentificationType[IdentificationType.ClassName]:
                return protractor_1.element(protractor_1.by.className(obj.value));
            case IdentificationType[IdentificationType.ButtonText]:
                return protractor_1.element(protractor_1.by.buttonText(obj.value));
            case IdentificationType[IdentificationType.NgShow]:
                new customLocator_1.customLocators().addLocators();
                return protractor_1.element(protractor_1.by.ngShow(obj.value));
            case IdentificationType[IdentificationType.NgClick]:
                new customLocator_1.customLocators().addLocators();
                return protractor_1.element(protractor_1.by.ngClick(obj.value));
            case IdentificationType[IdentificationType.Model]:
                return protractor_1.element(protractor_1.by.model(obj.value));
        }
    }
    ElementsLocator(obj) {
        switch (obj.type) {
            case IdentificationType[IdentificationType.Xpath]:
                return protractor_1.element.all(protractor_1.by.xpath(obj.value));
            case IdentificationType[IdentificationType.Css]:
                return protractor_1.element.all(protractor_1.by.css(obj.value));
            case IdentificationType[IdentificationType.Name]:
                return protractor_1.element.all(protractor_1.by.name(obj.value));
            case IdentificationType[IdentificationType.ID]:
                return protractor_1.element.all(protractor_1.by.id(obj.value));
            case IdentificationType[IdentificationType.LinkText]:
                return protractor_1.element.all(protractor_1.by.linkText(obj.value));
            case IdentificationType[IdentificationType.PartialLinkText]:
                return protractor_1.element.all(protractor_1.by.partialLinkText(obj.value));
            case IdentificationType[IdentificationType.ClassName]:
                return protractor_1.element.all(protractor_1.by.className(obj.value));
            case IdentificationType[IdentificationType.ButtonText]:
                return protractor_1.element.all(protractor_1.by.className(obj.value));
        }
    }
    navigateToURL(data) {
        return __awaiter(this, void 0, void 0, function* () {
            yield logger.log("info", "Browser Launched");
            yield protractor_1.browser.get(data.testData.basePage.url);
        });
    }
    switchToAlert() {
        return __awaiter(this, void 0, void 0, function* () {
            yield logger.log("info", "Switching to Alert");
            this.alert = protractor_1.browser.switchTo().alert();
        });
    }
    acceptAlert() {
        return __awaiter(this, void 0, void 0, function* () {
            //this.alert.
            yield this.alert.accept();
            protractor_1.browser.sleep(1000);
        });
    }
    getAlertText() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.alert.getText().then(function (text) {
                console.log(text);
            });
        });
    }
    ;
    getPageTitle() {
        return __awaiter(this, void 0, void 0, function* () {
            return protractor_1.browser.getTitle();
        });
    }
    ;
}
exports.BasePage = BasePage;
//# sourceMappingURL=BasePage.js.map