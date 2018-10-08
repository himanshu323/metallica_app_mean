import { BasePage } from "../../utilities/BasePage";
 import { HomePage } from "../pages/HomePage";
import * as dataFile from "../../data/tradeData.json"
import { TradeSearch } from "../pages/tradeSearch";
import { browser } from "protractor";
import { TradeCreate } from "../pages/tradeCreate";
import { TradeGrid } from "../pages/tradeGrid";
import { logger } from "../../utilities/loggerUtils";

var basePage = new BasePage();
var homePage = new HomePage();
let tradeSearch=new TradeSearch();
let tradeCreate=new TradeCreate();
let tradeGrid=new TradeGrid();

let data: any = dataFile;

describe("Trade Search Test",async()=>{
beforeAll(async ()=>{
    await  browser.waitForAngularEnabled(false);

    await browser.driver.manage().window().maximize();
})

    it("login to trade search",async()=>{
        await browser.driver.manage().window().maximize();
       
       
        await browser.manage().window().maximize();

        await console.log("Innnnnn");


       await  browser.driver.manage().window().maximize()
        await basePage.navigateToURL(data);

        await browser.manage().window().maximize();

        await homePage.loginToTrade(data.testData.login.email,data.testData.login.password);
    })


    xit("search the trade",async()=>{

        

        await browser.driver.manage().window().maximize();
        await tradeSearch.enterTradeSearchDetails(
            data.testData.tradeSearch.tradeFromDate,
            data.testData.tradeSearch.tradeToDate,
            data.testData.tradeSearch.commodity,
            data.testData.tradeSearch.side,
            data.testData.tradeSearch.counterparty,
            data.testData.tradeSearch.location
          
        )


        await tradeGrid.verifyTableData(data.testData.tradeGrid.tradeFromDate,
            data.testData.tradeGrid.tradeToDate,
            data.testData.tradeGrid.commodity,
            data.testData.tradeGrid.side,
            data.testData.tradeGrid.counterparty,
            data.testData.tradeGrid.location)

        await browser.sleep(3000);
        
    })

    xit("enter the details for trade create",async()=>{

        

        
        await tradeCreate.enterTradeCreateDetails(
            data.testData.tradeCreate.tradeDate,
            data.testData.tradeCreate.commodity,
            data.testData.tradeCreate.side,
            data.testData.tradeCreate.counterparty,
            data.testData.tradeCreate.location,
            data.testData.tradeCreate.price,
            data.testData.tradeCreate.quantity
          
        )

        
    })

    xit("delete the trade",async()=>{

        

        
        await browser.sleep(4000);
      let test=  await tradeGrid.deleteTrade(data.testData.tradeDelete.tradeId)

        if(test){
            logger.info("Trade deleted successfully")
        }

        
    })

    it("edit the trade",async()=>{

        

        await browser.manage().window().maximize();
 
        await browser.sleep(4000);
      let test=  await tradeGrid.editTrade(data.testData.tradeEdit.tradeId)

        if(test){
            await tradeCreate.enterTradeCreateDetails(data.testData.tradeCreate.tradeDate,
                data.testData.tradeUpdate.commodity,
                data.testData.tradeUpdate.side,
                data.testData.tradeUpdate.counterparty,
                data.testData.tradeUpdate.location,
                data.testData.tradeUpdate.price,
                data.testData.tradeUpdate.quantity,"edit")

            await logger.info("Details updated successfully")
        }

        
    })
})