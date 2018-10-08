import { element, by, browser } from 'protractor';
import { IdentificationType, BasePage } from '../../utilities/BasePage';


import { winston as logger } from "../../utilities/log"



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


    }
,

commodity: {
       
    value: "commodity"


}

    ,

    location: {
       
        value: "location"


    }
,

search: {
    
    value: "//span[text()='Search']"


},

clear: {
    
    value: "//span[text()='Clear']"


}
,
tradeSearchForm: {

  
   
    value: "searchForm"


},

tradeChangeForm: {
    
    value: "//span[text()='changeForm']"


}

    

};




export class TradeSearch extends BasePage {

    fromDate=element(by.id(Locators.tradeSearchForm['value'])).element(by.name(Locators.fromDate['value']))

    toDate=element(by.id(Locators.tradeSearchForm['value'])).element(by.name(Locators.toDate['value']))

    buy =element(by.id(Locators.tradeSearchForm['value'])).element(by.name(Locators.buy['value']));

    sell=element(by.id(Locators.tradeSearchForm['value'])).element(by.name(Locators.sell['value']));

    commoditySelect=element(by.id(Locators.tradeSearchForm['value'])).element(by.name(Locators.commodity['value']));

    counterpartySelect=element(by.id(Locators.tradeSearchForm['value'])).element(by.name(Locators.counterparty['value']));

    locationSelect=element(by.id(Locators.tradeSearchForm['value'])).element(by.name(Locators.location['value']))

    tradeSearchForm=element(by.id(Locators.tradeSearchForm['value']))
   
    tradeChangeForm=element(by.id(Locators.tradeChangeForm['value']))

    searchButton=element(by.xpath(Locators.search['value']));

    clearButton=element(by.xpath(Locators.clear['value']))


    async enterTradeSearchDetails(tradeFromDate:string,tradeToDate:string,commoditySelect:string,
    side:string,counterpartySelect:string,locationSelect:string) {

        // await element(by.xpath(Locators.tradeSearchForm['value'])).this.fromDate.sendKeys(tradeFromDate);

        await this.fromDate.sendKeys(tradeFromDate);
        await this.toDate.sendKeys(tradeToDate);

        // await browser.sleep(7000);
        // await console.log("insidse")

        await this.commoditySelect.click();
        // let c=await element(by.xpath("//form[@id='searchForm']//mat-select[@name='commodity']")).getAttribute("class");
        // await console.log(c);
        await element(by.xpath(`//span[@class='mat-option-text'][contains(text(),'${commoditySelect}')]`)).click();

        if(side.toLowerCase()==="buy"){
            await this.buy.click();
        }
        else if(side.toLowerCase()==="sell"){
            await this.sell.click();
        }

        await this.counterpartySelect.click();

        await element(by.xpath(`//span[@class='mat-option-text'][contains(text(),'${counterpartySelect}')]`)).click();

        await this.locationSelect.click();

        await element(by.xpath(`//span[@class='mat-option-text'][contains(text(),'${locationSelect}')]`)).click();


        await browser.sleep(4000);
        await this.searchButton.click();



        await logger.log("info", "Logged Into Trade dashboard Successfully");


    }

   

   


}