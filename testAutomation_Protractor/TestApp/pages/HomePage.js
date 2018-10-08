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
const BasePage_1 = require("../../utilities/BasePage");
const log_1 = require("../../utilities/log");
const Locators = {
    registrationTab: {
        type: BasePage_1.IdentificationType[BasePage_1.IdentificationType.Xpath],
        value: "//span[text()='Register']"
    },
    loginTab: {
        type: BasePage_1.IdentificationType[BasePage_1.IdentificationType.Xpath],
        value: "//span[text()='Login']"
    },
    emailField: {
        type: BasePage_1.IdentificationType[BasePage_1.IdentificationType.Name],
        value: "email"
    },
    passwordField: {
        type: BasePage_1.IdentificationType[BasePage_1.IdentificationType.Name],
        value: "password"
    },
    signUpButton: {
        type: BasePage_1.IdentificationType[BasePage_1.IdentificationType.ID],
        value: "signupButton"
    },
    loginButton: {
        type: BasePage_1.IdentificationType[BasePage_1.IdentificationType.ID],
        value: "loginButton"
    }
};
class HomePage extends BasePage_1.BasePage {
    constructor() {
        super(...arguments);
        this.registrationTab = this.ElementLocator(Locators.registrationTab);
        this.loginTab = this.ElementLocator(Locators.loginTab);
        this.emailField = this.ElementLocator(Locators.emailField);
        this.passwordField = this.ElementLocator(Locators.passwordField);
        this.loginButton = this.ElementLocator(Locators.loginButton);
        this.signUpButton = this.ElementLocator(Locators.signUpButton);
    }
    loginToTrade(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.loginTab.click();
            yield this.emailField.sendKeys(email);
            yield this.passwordField.sendKeys(password);
            yield protractor_1.browser.sleep(4000);
            // await this.loginButton.click();
            yield console.log(yield protractor_1.element(protractor_1.by.xpath("//span[text()='Login']")).getAttribute("class"));
            yield protractor_1.element(protractor_1.by.id("loginButton")).click();
            yield log_1.winston.log("info", "Logged Into Trade dashboard Successfully");
            // await browser.sleep(15000);
            yield console.log("insidse");
            //let c=await element(by.xpath("//form[@id='searchForm']//mat-select[@name='commodity']")).getAttribute("class");
            //await console.log(c);
            //await element(by.id("createTrade")).click();
            // let el=  await   element(by.xpath("//form[@id='searchForm']//mat-select[@name='commodity']//div[@class='mat-select-arrow-wrapper']"))
            //await browser.executeScript("arguments[0].click()",el);
            //await browser.sleep(3000);
            // await browser.actions().mouseMove(element(by.id("createTrade"))).doubleClick().perform();
            // await element(by.xpath(`//span[@class='mat-option-text'][contains(text(),'Aluminium')]`)).click();
            // await element(by.xpath(`//span[@class='mat-option-text'][contains(text(),'${commoditySelect}')]`)).click();
        });
    }
    registerTrade(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.registrationTab.click();
            yield this.emailField.sendKeys(email);
            yield this.passwordField.sendKeys(password);
            yield this.signUpButton.click();
            yield log_1.winston.log("info", "Registered into Trade dashboard Successfully");
        });
    }
}
exports.HomePage = HomePage;
//# sourceMappingURL=HomePage.js.map