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
const tradeCreate_1 = require("../pages/tradeCreate");
const dataFile = require("../../data/tradeData.json");
const protractor_1 = require("protractor");
const tradeGrid_1 = require("../pages/tradeGrid");
const loggerUtils_1 = require("../../utilities/loggerUtils");
const BasePage_1 = require("../../utilities/BasePage");
const HomePage_1 = require("../pages/HomePage");
let tradeCreate = new tradeCreate_1.TradeCreate();
var basePage = new BasePage_1.BasePage();
var homePage = new HomePage_1.HomePage();
let tradeGrid = new tradeGrid_1.TradeGrid();
let data = dataFile;
describe("Edit Trade Test", () => __awaiter(this, void 0, void 0, function* () {
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
    it("edit the trade", () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.sleep(3000);
        yield protractor_1.browser.manage().window().maximize();
        //await browser.manage().window().maximize();
        yield protractor_1.browser.sleep(4000);
        let test = yield tradeGrid.editTrade(data.testData.tradeEdit.tradeId);
        if (test) {
            yield tradeCreate.enterTradeCreateDetails(data.testData.tradeCreate.tradeDate, data.testData.tradeUpdate.commodity, data.testData.tradeUpdate.side, data.testData.tradeUpdate.counterparty, data.testData.tradeUpdate.location, data.testData.tradeUpdate.price, data.testData.tradeUpdate.quantity, "edit");
            yield loggerUtils_1.logger.info("Details updated successfully");
        }
    }));
}));
//# sourceMappingURL=tradeEditTest.js.map