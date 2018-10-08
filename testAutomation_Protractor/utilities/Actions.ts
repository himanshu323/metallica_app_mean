/**
 * @author himanshuarora
 */

import { ElementFinder, browser } from "protractor";
import { logger } from '../utilities/loggerUtils';
//import { Options, ExportToCsv } from "export-to-csv"
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
import { expect, assert } from "chai"
import { write } from "fs";
var csvWriter = require('csv-write-stream')
var writer = csvWriter()

export class Actions {



    /* 
    Enters text on the target fields
    */

    static async enterTextOnElement(locator: ElementFinder, value: string, elementLabel: string) {

        await logger.info(`Entering ${value} on ${elementLabel}`);

        await locator.clear();

        await locator.sendKeys(value);


    }

    /* 
    Move to element then Clicks on the target element
    */
    static async MoveNClickOnElement(locator: ElementFinder, elementLabel: string) {
        await logger.info(`Moving & Clicking on ${elementLabel}`);

        await browser.actions().mouseMove(locator).click().perform()

    }

    /* 
     * Clicks  on the target hover element
     * */
    static async clickOnHoverElement(locator: ElementFinder, elementLabel: string) {
        await logger.info(`Clicking on ${elementLabel}`);
        try {
            await locator.click();
        }
        catch (error) {
            await locator.click();
        }

    }


    /* 
    Clicks  on the target element
    */
    static async clickOnElement(locator: ElementFinder, elementLabel: string) {
        await logger.info(`Clicking on ${elementLabel}`);

        await locator.click();

    }


    /* 
     * Get text from 'value' Attribute 
     * */
    static async getValueFromAttribute(locator: ElementFinder, attr: string, elementLabel: string) {
        await console.log(`Verifying the  subtext on element ${elementLabel}`);
        return await locator.getAttribute(attr);
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
    static async writeToCSV(path,data){
        var writer = csvWriter()
        writer.pipe(writer.createWriteStream(path))
        writer.write(data)
        writer.end()
    }
}

