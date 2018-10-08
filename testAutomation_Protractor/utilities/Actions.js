"use strict";
/**
 * @author himanshuarora
 */
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
const loggerUtils_1 = require("../utilities/loggerUtils");
//import { Options, ExportToCsv } from "export-to-csv"
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
var csvWriter = require('csv-write-stream');
var writer = csvWriter();
class Actions {
    /*
    Enters text on the target fields
    */
    static enterTextOnElement(locator, value, elementLabel) {
        return __awaiter(this, void 0, void 0, function* () {
            yield loggerUtils_1.logger.info(`Entering ${value} on ${elementLabel}`);
            yield locator.clear();
            yield locator.sendKeys(value);
        });
    }
    /*
    Move to element then Clicks on the target element
    */
    static MoveNClickOnElement(locator, elementLabel) {
        return __awaiter(this, void 0, void 0, function* () {
            yield loggerUtils_1.logger.info(`Moving & Clicking on ${elementLabel}`);
            yield protractor_1.browser.actions().mouseMove(locator).click().perform();
        });
    }
    /*
     * Clicks  on the target hover element
     * */
    static clickOnHoverElement(locator, elementLabel) {
        return __awaiter(this, void 0, void 0, function* () {
            yield loggerUtils_1.logger.info(`Clicking on ${elementLabel}`);
            try {
                yield locator.click();
            }
            catch (error) {
                yield locator.click();
            }
        });
    }
    /*
    Clicks  on the target element
    */
    static clickOnElement(locator, elementLabel) {
        return __awaiter(this, void 0, void 0, function* () {
            yield loggerUtils_1.logger.info(`Clicking on ${elementLabel}`);
            yield locator.click();
        });
    }
    /*
     * Get text from 'value' Attribute
     * */
    static getValueFromAttribute(locator, attr, elementLabel) {
        return __awaiter(this, void 0, void 0, function* () {
            yield console.log(`Verifying the  subtext on element ${elementLabel}`);
            return yield locator.getAttribute(attr);
        });
    }
    // static async exportToCSV(data) {
    //     const options: Options = {
    //         title: "Test Csv",
    //         useBom: true,
    //         useKeysAsHeaders: true
    //     }
    //     const exportToCsvInstance = new ExportToCsv(options);
    //     exportToCsvInstance.generateCsv(data);
    // }
    /* static async writeToCSV(path,headerArray,data){

        const csvWriter = createCsvWriter({
            header: headerArray,
            path: path
        });

        csvWriter.writeRecords(data)       // returns a promise
            .then(() => {
                console.log('...Done');
            });

    }
 */
    static writeToCSV(path, data) {
        return __awaiter(this, void 0, void 0, function* () {
            var writer = csvWriter();
            writer.pipe(writer.createWriteStream(path));
            writer.write(data);
            writer.end();
        });
    }
}
exports.Actions = Actions;
//# sourceMappingURL=Actions.js.map