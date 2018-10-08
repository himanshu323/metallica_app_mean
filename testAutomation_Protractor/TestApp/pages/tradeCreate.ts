import { element, by, browser } from 'protractor';
import { IdentificationType, BasePage } from '../../utilities/BasePage';


import { winston as logger } from "../../utilities/log"



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


    }
,

commodity: {
       
    value: "commodity"


}
,
price:{
value:"price"
}
    ,

    quantity:{
        value:"quantity"
    }
,
    location: {
       
        value: "location"


    }
,

create: {
    
    value: "//span[text()='Create']"


},

cancel: {
    
    value: "//span[text()='Cancel']"


}
,


tradeChangeForm: {
    
    value: "changeForm"


},


save: {
    
    value: "//span[text()='Save']"


}
    

};




export class TradeCreate extends BasePage {

    tradeDate=element(by.id(Locators.tradeChangeForm['value'])).element(by.name(Locators.tradeDate['value']))


    buy =element(by.id(Locators.tradeChangeForm['value'])).element(by.xpath(Locators.buy['value']));

    sell=element(by.id(Locators.tradeChangeForm['value'])).element(by.xpath(Locators.sell['value']));

    commoditySelect=element(by.id(Locators.tradeChangeForm['value'])).element(by.name(Locators.commodity['value']));

    counterpartySelect=element(by.id(Locators.tradeChangeForm['value'])).element(by.name(Locators.counterparty['value']));

    locationSelect=element(by.id(Locators.tradeChangeForm['value'])).element(by.name(Locators.location['value']))
    quantity=element(by.id(Locators.tradeChangeForm['value'])).element(by.name(Locators.quantity['value']))

    price=element(by.id(Locators.tradeChangeForm['value'])).element(by.name(Locators.price['value']))


    tradeButton=element(by.id("createTrade"));
    createButton=element(by.xpath(Locators.create['value']));

    saveButton=element(by.xpath(Locators.save['value']));

    cancelButton=element(by.xpath(Locators.cancel['value']))


    async enterTradeCreateDetails(tradeDate:string,commoditySelect:string,
    side:string,counterpartySelect:string,locationSelect:string,price:number,quantity:number, mode="create") {

        // await element(by.xpath(Locators.tradeSearchForm['value'])).this.fromDate.sendKeys(tradeFromDate);


        if(!(mode=="edit")){

            await this.tradeButton.click();
        }
        await console.log("trade Date",tradeDate)
        await this.tradeDate.clear();
        await this.tradeDate.sendKeys(tradeDate);
    

        await this.commoditySelect.click();
  
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

        await this.price.clear();
        await this.price.sendKeys(price);

        await this.quantity.clear();
        await this.quantity.sendKeys(quantity);

        await browser.sleep(10000);
        
        if(mode==="create"){

            await this.createButton.click();
        }
        else {
            await this.saveButton.click();
        }


        await browser.sleep(10000);


        await logger.log("info", "Trade created Successfully");


    }

   

   


}