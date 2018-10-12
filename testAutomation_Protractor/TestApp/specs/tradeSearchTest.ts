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


    it("search the trade",async()=>{

        

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

   
   

    
})