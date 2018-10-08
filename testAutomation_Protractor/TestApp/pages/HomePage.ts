import { element, by, browser, ElementFinder } from 'protractor';
import { IdentificationType, BasePage } from '../../utilities/BasePage';
import { async } from 'q';
import { importExpr } from '@angular/compiler/src/output/output_ast';

import { winston as logger } from "../../utilities/log"



const Locators = {


    registrationTab: {
        type: IdentificationType[IdentificationType.Xpath],
        value: "//span[text()='Register']"
    }
    ,
    loginTab: {
        type: IdentificationType[IdentificationType.Xpath],
        value: "//span[text()='Login']"


    },

    emailField: {
        type: IdentificationType[IdentificationType.Name],
        value: "email"


    },


    passwordField: {
        type: IdentificationType[IdentificationType.Name],
        value: "password"


    },

    signUpButton: {
        type: IdentificationType[IdentificationType.ID],
        value: "signupButton"


    },

    loginButton: {
        type: IdentificationType[IdentificationType.ID],
        value: "loginButton"


    }

    

};


export class HomePage extends BasePage {


    registrationTab = this.ElementLocator(Locators.registrationTab);

    loginTab = this.ElementLocator(Locators.loginTab);

    emailField = this.ElementLocator(Locators.emailField);

    passwordField = this.ElementLocator(Locators.passwordField);

    loginButton = this.ElementLocator(Locators.loginButton);

    signUpButton = this.ElementLocator(Locators.signUpButton);



    async loginToTrade(email:string,password:string) {

        await this.loginTab.click();

        await this.emailField.sendKeys(email);

        await this.passwordField.sendKeys(password);


        await browser.sleep(4000);

       // await this.loginButton.click();

       await console.log(await element(by.xpath("//span[text()='Login']")).getAttribute("class"));

        await element(by.id("loginButton")).click();
        await logger.log("info", "Logged Into Trade dashboard Successfully");


       // await browser.sleep(15000);
        await console.log("insidse")

        //let c=await element(by.xpath("//form[@id='searchForm']//mat-select[@name='commodity']")).getAttribute("class");
        //await console.log(c);

        //await element(by.id("createTrade")).click();
     // let el=  await   element(by.xpath("//form[@id='searchForm']//mat-select[@name='commodity']//div[@class='mat-select-arrow-wrapper']"))
     //await browser.executeScript("arguments[0].click()",el);
     //await browser.sleep(3000);


    
    // await browser.actions().mouseMove(element(by.id("createTrade"))).doubleClick().perform();
        // await element(by.xpath(`//span[@class='mat-option-text'][contains(text(),'Aluminium')]`)).click();

       // await element(by.xpath(`//span[@class='mat-option-text'][contains(text(),'${commoditySelect}')]`)).click();



    }

    async registerTrade(email:string,password:string) {

        await this.registrationTab.click();

        await this.emailField.sendKeys(email);

        await this.passwordField.sendKeys(password);

        await this.signUpButton.click();



        await logger.log("info", "Registered into Trade dashboard Successfully");


    }

   


}