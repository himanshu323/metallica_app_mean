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
    fromDate: {
        value: "fromDate"
    },
    toDate: {
        value: "toDate"
    },
    buy: {
        value: "buy"
    },
    sell: {
        value: "sell"
    },
    counterparty: {
        value: "counterparty"
    },
    commodity: {
        value: "commodity"
    },
    location: {
        value: "location"
    },
    search: {
        value: "//span[text()='Search']"
    },
    clear: {
        value: "//span[text()='Clear']"
    },
    tradeSearchForm: {
        value: "searchForm"
    },
    tradeChangeForm: {
        value: "//span[text()='changeForm']"
    }
};
class TradeSearch extends BasePage_1.BasePage {
    constructor() {
        super(...arguments);
        this.fromDate = protractor_1.element(protractor_1.by.id(Locators.tradeSearchForm['value'])).element(protractor_1.by.name(Locators.fromDate['value']));
        this.toDate = protractor_1.element(protractor_1.by.id(Locators.tradeSearchForm['value'])).element(protractor_1.by.name(Locators.toDate['value']));
        this.buy = protractor_1.element(protractor_1.by.id(Locators.tradeSearchForm['value'])).element(protractor_1.by.name(Locators.buy['value']));
        this.sell = protractor_1.element(protractor_1.by.id(Locators.tradeSearchForm['value'])).element(protractor_1.by.name(Locators.sell['value']));
        this.commoditySelect = protractor_1.element(protractor_1.by.id(Locators.tradeSearchForm['value'])).element(protractor_1.by.name(Locators.commodity['value']));
        this.counterpartySelect = protractor_1.element(protractor_1.by.id(Locators.tradeSearchForm['value'])).element(protractor_1.by.name(Locators.counterparty['value']));
        this.locationSelect = protractor_1.element(protractor_1.by.id(Locators.tradeSearchForm['value'])).element(protractor_1.by.name(Locators.location['value']));
        this.tradeSearchForm = protractor_1.element(protractor_1.by.id(Locators.tradeSearchForm['value']));
        this.tradeChangeForm = protractor_1.element(protractor_1.by.id(Locators.tradeChangeForm['value']));
        this.searchButton = protractor_1.element(protractor_1.by.xpath(Locators.search['value']));
        this.clearButton = protractor_1.element(protractor_1.by.xpath(Locators.clear['value']));
    }
    enterTradeSearchDetails(tradeFromDate, tradeToDate, commoditySelect, side, counterpartySelect, locationSelect) {
        return __awaiter(this, void 0, void 0, function* () {
            // await element(by.xpath(Locators.tradeSearchForm['value'])).this.fromDate.sendKeys(tradeFromDate);
            yield this.fromDate.sendKeys(tradeFromDate);
            yield this.toDate.sendKeys(tradeToDate);
            // await browser.sleep(7000);
            // await console.log("insidse")
            yield this.commoditySelect.click();
            // let c=await element(by.xpath("//form[@id='searchForm']//mat-select[@name='commodity']")).getAttribute("class");
            // await console.log(c);
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
            yield protractor_1.browser.sleep(4000);
            yield this.searchButton.click();
            yield log_1.winston.log("info", "Logged Into Trade dashboard Successfully");
        });
    }
}
exports.TradeSearch = TradeSearch;
//# sourceMappingURL=tradeSearch.js.map