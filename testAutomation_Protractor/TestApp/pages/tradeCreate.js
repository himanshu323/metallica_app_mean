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
    tradeDate: {
        value: "tradeDate"
    },
    buy: {
        value: "//mat-radio-button[@value='buy']"
    },
    sell: {
        value: "//mat-radio-button[@value='sell']"
    },
    counterparty: {
        value: "counterparty"
    },
    commodity: {
        value: "commodity"
    },
    price: {
        value: "price"
    },
    quantity: {
        value: "quantity"
    },
    location: {
        value: "location"
    },
    create: {
        value: "//span[text()='Create']"
    },
    cancel: {
        value: "//span[text()='Cancel']"
    },
    tradeChangeForm: {
        value: "changeForm"
    },
    save: {
        value: "//span[text()='Save']"
    }
};
class TradeCreate extends BasePage_1.BasePage {
    constructor() {
        super(...arguments);
        this.tradeDate = protractor_1.element(protractor_1.by.id(Locators.tradeChangeForm['value'])).element(protractor_1.by.name(Locators.tradeDate['value']));
        this.buy = protractor_1.element(protractor_1.by.id(Locators.tradeChangeForm['value'])).element(protractor_1.by.xpath(Locators.buy['value']));
        this.sell = protractor_1.element(protractor_1.by.id(Locators.tradeChangeForm['value'])).element(protractor_1.by.xpath(Locators.sell['value']));
        this.commoditySelect = protractor_1.element(protractor_1.by.id(Locators.tradeChangeForm['value'])).element(protractor_1.by.name(Locators.commodity['value']));
        this.counterpartySelect = protractor_1.element(protractor_1.by.id(Locators.tradeChangeForm['value'])).element(protractor_1.by.name(Locators.counterparty['value']));
        this.locationSelect = protractor_1.element(protractor_1.by.id(Locators.tradeChangeForm['value'])).element(protractor_1.by.name(Locators.location['value']));
        this.quantity = protractor_1.element(protractor_1.by.id(Locators.tradeChangeForm['value'])).element(protractor_1.by.name(Locators.quantity['value']));
        this.price = protractor_1.element(protractor_1.by.id(Locators.tradeChangeForm['value'])).element(protractor_1.by.name(Locators.price['value']));
        this.tradeButton = protractor_1.element(protractor_1.by.id("createTrade"));
        this.createButton = protractor_1.element(protractor_1.by.xpath(Locators.create['value']));
        this.saveButton = protractor_1.element(protractor_1.by.xpath(Locators.save['value']));
        this.cancelButton = protractor_1.element(protractor_1.by.xpath(Locators.cancel['value']));
    }
    enterTradeCreateDetails(tradeDate, commoditySelect, side, counterpartySelect, locationSelect, price, quantity, mode = "create") {
        return __awaiter(this, void 0, void 0, function* () {
            // await element(by.xpath(Locators.tradeSearchForm['value'])).this.fromDate.sendKeys(tradeFromDate);
            if (!(mode == "edit")) {
                yield this.tradeButton.click();
            }
            yield console.log("trade Date", tradeDate);
            yield this.tradeDate.clear();
            yield this.tradeDate.sendKeys(tradeDate);
            yield this.commoditySelect.click();
            yield protractor_1.element(protractor_1.by.xpath(`//span[@class='mat-option-text'][contains(text(),'${commoditySelect}')]`)).click();
            if (side.toLowerCase() === "buy") {
                yield this.buy.click();
            }
            else if (side.toLowerCase() === "sell") {
                yield this.sell.click();
            }
            yield this.counterpartySelect.click();
            yield protractor_1.element(protractor_1.by.xpath(`//span[@class='mat-option-text'][contains(text(),'${counterpartySelect}')]`)).click();
            yield this.locationSelect.click();
            yield protractor_1.element(protractor_1.by.xpath(`//span[@class='mat-option-text'][contains(text(),'${locationSelect}')]`)).click();
            yield this.price.clear();
            yield this.price.sendKeys(price);
            yield this.quantity.clear();
            yield this.quantity.sendKeys(quantity);
            yield protractor_1.browser.sleep(10000);
            if (mode === "create") {
                yield this.createButton.click();
            }
            else {
                yield this.saveButton.click();
            }
            yield protractor_1.browser.sleep(10000);
            yield log_1.winston.log("info", "Trade created Successfully");
        });
    }
}
exports.TradeCreate = TradeCreate;
//# sourceMappingURL=tradeCreate.js.map