import { element, by, browser } from 'protractor';
import { customLocators } from './customLocator';
import * as logger from 'winston';





export enum IdentificationType {


    Name,
    ID,
    ClassName,
    Xpath,
    Css,
    LinkText,
    PartialLinkText,
    ButtonText,
    NgShow,
    NgClick,
    Model

}
export class BasePage {



    private alert;

    ElementLocator(obj) {



        switch (obj.type) {

            case IdentificationType[IdentificationType.Xpath]:
                return element(by.xpath(obj.value));

            case IdentificationType[IdentificationType.Css]:
                return element(by.css(obj.value));

            case IdentificationType[IdentificationType.Name]:
                return element(by.name(obj.value));

            case IdentificationType[IdentificationType.ID]:
                return element(by.id(obj.value));

            case IdentificationType[IdentificationType.LinkText]:
                return element(by.linkText(obj.value));

            case IdentificationType[IdentificationType.PartialLinkText]:
                return element(by.partialLinkText(obj.value));

            case IdentificationType[IdentificationType.ClassName]:
                return element(by.className(obj.value));

            case IdentificationType[IdentificationType.ButtonText]:
                return element(by.buttonText(obj.value));

            case IdentificationType[IdentificationType.NgShow]:
                new customLocators().addLocators();
                return element(by.ngShow(obj.value));

            case IdentificationType[IdentificationType.NgClick]:
                new customLocators().addLocators();
                return element(by.ngClick(obj.value));


            case IdentificationType[IdentificationType.Model]:
                return element(by.model(obj.value));






        }
    }

    ElementsLocator(obj) {

        switch (obj.type) {

            case IdentificationType[IdentificationType.Xpath]:
                return element.all(by.xpath(obj.value));

            case IdentificationType[IdentificationType.Css]:
                return element.all(by.css(obj.value));

            case IdentificationType[IdentificationType.Name]:
                return element.all(by.name(obj.value));

            case IdentificationType[IdentificationType.ID]:
                return element.all(by.id(obj.value));

            case IdentificationType[IdentificationType.LinkText]:
                return element.all(by.linkText(obj.value));

            case IdentificationType[IdentificationType.PartialLinkText]:
                return element.all(by.partialLinkText(obj.value));

            case IdentificationType[IdentificationType.ClassName]:
                return element.all(by.className(obj.value));

            case IdentificationType[IdentificationType.ButtonText]:
                return element.all(by.className(obj.value));



        }



    }


    async navigateToURL(data) {

       await logger.log("info", "Browser Launched");
       await  browser.get(data.testData.basePage.url);
    }

    async switchToAlert() {

        await logger.log("info", "Switching to Alert");

         this.alert =  browser.switchTo().alert();



    }

    async acceptAlert() {

        //this.alert.
        await this.alert.accept();
        browser.sleep(1000);
        


    }
    async getAlertText() {

        await this.alert.getText().then(function (text) {
            console.log(text);

        })


    };

    async getPageTitle() {

        return browser.getTitle();

    };
}