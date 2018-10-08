import { element, by, browser, ElementArrayFinder } from 'protractor';
import { IdentificationType, BasePage } from '../../utilities/BasePage';


import { winston as logger } from "../../utilities/log"
import { assertPlatform } from '@angular/core';
import * as moment from "moment"



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


}

    

};




export class TradeGrid extends BasePage {

  async verifyTableData(tradeFromDateExp:string,tradeToDateExp:string,commoditySelectExp:string,
    sideExp:string,counterpartySelectExp:string,locationSelectExp:string){

        await browser.sleep(7000);

let count= await element.all(by.xpath("//table[@id='tradeTable']//tbody/tr")).count();


//let count=await rows.count();

await console.log("count",count);


for(let i=1;i<=Number(count);i++){

   let tradeDate= await element(by.xpath(`//table[@id='tradeTable']/tbody/tr[${i}]//td[contains(@class,'tradeDate')]`)).getText();
await console.log("Trade Date",tradeDate);

await console.log(tradeDate);

   let commodity= await element(by.xpath(`//table[@id='tradeTable']/tbody/tr[${i}]//td[contains(@class,'commodity')]`)).getText();

   let side= await element(by.xpath(`//table[@id='tradeTable']/tbody/tr[${i}]/td[contains(@class,'side')]`)).getText();

//    let qty= await element.all(by.xpath(`//table[@id='tradeTable']//tr[${i}]//td[contains(@class,'qty')]`)).getText();

//    let price= await element.all(by.xpath(`//table[@id='tradeTable']//tr[${i}]//td[contains(@class,'price')]`)).getText();

   let counterparty= await element(by.xpath(`//table[@id='tradeTable']/tbody/tr[${i}]//td[contains(@class,'counterparty')]`)).getText();

   let location= await element(by.xpath(`//table[@id='tradeTable']/tbody/tr[${i}]//td[contains(@class,'location')]`)).getText();

   
   let dateFlag;
   let startDate=moment(tradeFromDateExp)
   let endDate =moment(tradeToDateExp);
            
   let testDate = moment(tradeDate);

   console.log("Start Date",startDate);

   console.log("End Date", endDate);

   console.log("Test Date",testDate);;

   console.log("Commu",commodity);

   if((testDate.isAfter(startDate) && testDate.isBefore(endDate)) || testDate.isSame(startDate)
       || testDate.isSame(endDate)){
           dateFlag=true;
          
       }

       console.log("DateFlag",dateFlag);
       console.log(commodity.trim(),commoditySelectExp);
       console.log(side.trim(),sideExp )
       console.log(counterparty.trim(),counterpartySelectExp)
       console.log(location.trim(),locationSelectExp)
    if(!(dateFlag && commodity.trim()===commoditySelectExp &&
        side.trim()===sideExp 

        && counterparty.trim()===counterpartySelectExp && location.trim()===locationSelectExp)
){

    throw Error("Table data validation failed")
}

}

return true;

   }


   async deleteTrade(tradeIdExp:string){

    let count= await element.all(by.xpath("//table[@id='tradeTable']//tbody/tr")).count();


    
    await console.log("count",count);
    
    
    for(let i=1;i<=Number(count);i++){
    
       let tradeId= await element(by.xpath(`//table[@id='tradeTable']/tbody/tr[${i}]//td[contains(@class,'tradeId')]`)).getText();
    

       await console.log("trade id",tradeId);
       if(tradeId.trim()===tradeIdExp){

        await element(by.id("deleteButton")).click();

        return true;
       }

   }

   

   

   return false;

   }




   async editTrade(tradeIdExp:string){

    let count= await element.all(by.xpath("//table[@id='tradeTable']//tbody/tr")).count();


    
    await console.log("count",count);
    
    
    for(let i=1;i<=Number(count);i++){
    
       let tradeId= await element(by.xpath(`//table[@id='tradeTable']/tbody/tr[${i}]//td[contains(@class,'tradeId')]`)).getText();
    

       await console.log("trade id",tradeId);
       if(tradeId.trim()===tradeIdExp){

        await element(by.id("editButton")).click();

        return true;
       }

   }

   

   

   return false;

   }

}