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
const BasePage_1 = require("../../utilities/BasePage");
const HomePage_1 = require("../pages/HomePage");
const dataFile = require("../../data/tradeData.json");
const tradeSearch_1 = require("../pages/tradeSearch");
const protractor_1 = require("protractor");
const tradeGrid_1 = require("../pages/tradeGrid");
var basePage = new BasePage_1.BasePage();
var homePage = new HomePage_1.HomePage();
let tradeSearch = new tradeSearch_1.TradeSearch();
let tradeGrid = new tradeGrid_1.TradeGrid();
let data = dataFile;
describe("Trade Search Test", () => __awaiter(this, void 0, void 0, function* () {
    beforeAll(() => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.waitForAngularEnabled(false);
        yield protractor_1.browser.driver.manage().window().maximize();
    }));
    it("login to trade search", () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.driver.manage().window().maximize();
        yield protractor_1.browser.manage().window().maximize();
        yield console.log("Innnnnn");
        yield protractor_1.browser.driver.manage().window().maximize();
        yield basePage.navigateToURL(data);
        yield protractor_1.browser.manage().window().maximize();
        yield homePage.loginToTrade(data.testData.login.email, data.testData.login.password);
    }));
    it("search the trade", () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.driver.manage().window().maximize();
        yield tradeSearch.enterTradeSearchDetails(data.testData.tradeSearch.tradeFromDate, data.testData.tradeSearch.tradeToDate, data.testData.tradeSearch.commodity, data.testData.tradeSearch.side, data.testData.tradeSearch.counterparty, data.testData.tradeSearch.location);
        yield tradeGrid.verifyTableData(data.testData.tradeGrid.tradeFromDate, data.testData.tradeGrid.tradeToDate, data.testData.tradeGrid.commodity, data.testData.tradeGrid.side, data.testData.tradeGrid.counterparty, data.testData.tradeGrid.location);
        yield protractor_1.browser.sleep(3000);
    }));
}));
//# sourceMappingURL=tradeSearchTest.js.map