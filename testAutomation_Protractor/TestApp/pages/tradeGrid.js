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
const moment = require("moment");
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
    }
};
class TradeGrid extends BasePage_1.BasePage {
    verifyTableData(tradeFromDateExp, tradeToDateExp, commoditySelectExp, sideExp, counterpartySelectExp, locationSelectExp) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.sleep(7000);
            let count = yield protractor_1.element.all(protractor_1.by.xpath("//table[@id='tradeTable']//tbody/tr")).count();
            //let count=await rows.count();
            yield console.log("count", count);
            for (let i = 1; i <= Number(count); i++) {
                let tradeDate = yield protractor_1.element(protractor_1.by.xpath(`//table[@id='tradeTable']/tbody/tr[${i}]//td[contains(@class,'tradeDate')]`)).getText();
                yield console.log("Trade Date", tradeDate);
                yield console.log(tradeDate);
                let commodity = yield protractor_1.element(protractor_1.by.xpath(`//table[@id='tradeTable']/tbody/tr[${i}]//td[contains(@class,'commodity')]`)).getText();
                let side = yield protractor_1.element(protractor_1.by.xpath(`//table[@id='tradeTable']/tbody/tr[${i}]/td[contains(@class,'side')]`)).getText();
                //    let qty= await element.all(by.xpath(`//table[@id='tradeTable']//tr[${i}]//td[contains(@class,'qty')]`)).getText();
                //    let price= await element.all(by.xpath(`//table[@id='tradeTable']//tr[${i}]//td[contains(@class,'price')]`)).getText();
                let counterparty = yield protractor_1.element(protractor_1.by.xpath(`//table[@id='tradeTable']/tbody/tr[${i}]//td[contains(@class,'counterparty')]`)).getText();
                let location = yield protractor_1.element(protractor_1.by.xpath(`//table[@id='tradeTable']/tbody/tr[${i}]//td[contains(@class,'location')]`)).getText();
                let dateFlag;
                let startDate = moment(tradeFromDateExp);
                let endDate = moment(tradeToDateExp);
                let testDate = moment(tradeDate);
                console.log("Start Date", startDate);
                console.log("End Date", endDate);
                console.log("Test Date", testDate);
                ;
                console.log("Commu", commodity);
                if ((testDate.isAfter(startDate) && testDate.isBefore(endDate)) || testDate.isSame(startDate)
                    || testDate.isSame(endDate)) {
                    dateFlag = true;
                }
                console.log("DateFlag", dateFlag);
                console.log(commodity.trim(), commoditySelectExp);
                console.log(side.trim(), sideExp);
                console.log(counterparty.trim(), counterpartySelectExp);
                console.log(location.trim(), locationSelectExp);
                if (!(dateFlag && commodity.trim() === commoditySelectExp &&
                    side.trim() === sideExp
                    && counterparty.trim() === counterpartySelectExp && location.trim() === locationSelectExp)) {
                    throw Error("Table data validation failed");
                }
            }
            return true;
        });
    }
    deleteTrade(tradeIdExp) {
        return __awaiter(this, void 0, void 0, function* () {
            let count = yield protractor_1.element.all(protractor_1.by.xpath("//table[@id='tradeTable']//tbody/tr")).count();
            yield console.log("count", count);
            for (let i = 1; i <= Number(count); i++) {
                let tradeId = yield protractor_1.element(protractor_1.by.xpath(`//table[@id='tradeTable']/tbody/tr[${i}]//td[contains(@class,'tradeId')]`)).getText();
                yield console.log("trade id", tradeId);
                if (tradeId.trim() === tradeIdExp) {
                    yield protractor_1.element(protractor_1.by.id("deleteButton")).click();
                    return true;
                }
            }
            return false;
        });
    }
    editTrade(tradeIdExp) {
        return __awaiter(this, void 0, void 0, function* () {
            let count = yield protractor_1.element.all(protractor_1.by.xpath("//table[@id='tradeTable']//tbody/tr")).count();
            yield console.log("count", count);
            for (let i = 1; i <= Number(count); i++) {
                let tradeId = yield protractor_1.element(protractor_1.by.xpath(`//table[@id='tradeTable']/tbody/tr[${i}]//td[contains(@class,'tradeId')]`)).getText();
                yield console.log("trade id", tradeId);
                if (tradeId.trim() === tradeIdExp) {
                    yield protractor_1.element(protractor_1.by.id("editButton")).click();
                    return true;
                }
            }
            return false;
        });
    }
}
exports.TradeGrid = TradeGrid;
//# sourceMappingURL=tradeGrid.js.map