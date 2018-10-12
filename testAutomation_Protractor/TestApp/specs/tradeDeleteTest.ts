import { TradeCreate } from "../pages/tradeCreate";
import * as dataFile from "../../data/tradeData.json"
import { browser } from "protractor";
import { TradeGrid } from "../pages/tradeGrid";
import { logger } from "../../utilities/loggerUtils";
import { BasePage } from "../../utilities/BasePage";
import { HomePage } from "../pages/HomePage";

var basePage = new BasePage();
var homePage = new HomePage();
let tradeGrid=new TradeGrid();
let data: any = dataFile;
describe("Delete Trade Test",async()=>{

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

    it("delete the trade",async()=>{

        

        
        await browser.sleep(4000);
      let test=  await tradeGrid.deleteTrade(data.testData.tradeDelete.tradeId)

        if(test){
            logger.info("Trade deleted successfully")
        }

        
    })

})

