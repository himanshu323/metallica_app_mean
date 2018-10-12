import { TradeCreate } from "../pages/tradeCreate";
import * as dataFile from "../../data/tradeData.json"
import { BasePage } from "../../utilities/BasePage";
import { HomePage } from "../pages/HomePage";
import { browser } from "protractor";

let tradeCreate=new TradeCreate();
var basePage = new BasePage();
var homePage = new HomePage();
let data: any = dataFile;
describe("Create Trade Test",async()=>{

    beforeAll(async ()=>{
        await  browser.waitForAngularEnabled(false);
    
        await browser.driver.manage().window().maximize();
    })

    it("login to trade search",async()=>{

        await browser.sleep(3000);
        await browser.manage().window().maximize();



       
       
        await browser.driver.manage().window().maximize();

        await console.log("Innnnnn");


       await  browser.driver.manage().window().maximize()
        await basePage.navigateToURL(data);

        await browser.manage().window().maximize();

        await homePage.loginToTrade(data.testData.login.email,data.testData.login.password);
    })

    it("enter the details for trade create",async()=>{

        
        await browser.sleep(3000);
        await browser.manage().window().maximize();
        
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

})

