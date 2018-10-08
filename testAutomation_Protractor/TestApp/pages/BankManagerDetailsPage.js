// import { element, by, browser } from 'protractor';
// import { IdentificationType, BasePage } from '../../utilities/BasePage';
// import { async } from 'q';
// import { winston as logger } from "../../utilities/log"
// import { SelectWrapper } from '../../utilities/selectWrapper';
// const Locators = {
//     addCustomerTab: {
//         type: IdentificationType[IdentificationType.Xpath],
//         value: "//button[contains(text(),'Add Customer')]"
//     }
//     ,
//     openAcountTab: {
//         type: IdentificationType[IdentificationType.ButtonText],
//         value: "Open Account"
//     }
//     ,
//     customerInfoTab: {
//         type: IdentificationType[IdentificationType.ButtonText],
//         value: "Customers"
//     },
//     firstNameField: {
//         type: IdentificationType[IdentificationType.Model],
//         value: "fName"
//     },
//     postalCodeField: {
//         type: IdentificationType[IdentificationType.Model],
//         value: "postCd"
//     },
//     lastNameField: {
//         type: IdentificationType[IdentificationType.Model],
//         value: "lName"
//     }
//     ,
//     addCustomerButton: {
//         type: IdentificationType[IdentificationType.Css],
//         value: ".btn.btn-default"
//     }
//     ,
//     customerSelect: {
//         type: IdentificationType[IdentificationType.ID],
//         value: "userSelect"
//     },
//     searchCustomerField: {
//         type: IdentificationType[IdentificationType.Model],
//         value: "searchCustomer"
//     },
//     currencySelect: {
//         type: IdentificationType[IdentificationType.ID],
//         value: "currency"
//     },
//     processButton: {
//         type: IdentificationType[IdentificationType.ButtonText],
//         value: "Process"
//     },
// };
// export class BankManagerDetailsPage extends BasePage {
//     /* heading =element(by.xpath("//h1[text()=' All courses ']//ancestor::div//h2[text()=' Selenium Framework development ']"));
//     headings =element.all(by.xpath("//h1[text()=' All courses ']//ancestor::div//h2"));
//      */
//     addCustomerTabButton = this.ElementLocator(Locators.addCustomerTab);
//     openAcountTab = this.ElementLocator(Locators.openAcountTab);
//     customerInfoTab = this.ElementLocator(Locators.customerInfoTab);
//     firstNameField = this.ElementLocator(Locators.firstNameField);
//     lastNameField = this.ElementLocator(Locators.lastNameField);
//     postalCodeField = this.ElementLocator(Locators.postalCodeField);
//     addCustomerButton = this.ElementLocator(Locators.addCustomerButton);
//     customerSelect = this.ElementLocator(Locators.customerSelect);
//     currencySelect = this.ElementLocator(Locators.currencySelect);
//     processButton = this.ElementLocator(Locators.processButton);
//     searchCustomerField = this.ElementLocator(Locators.searchCustomerField);
//     async goToAddCustomer() {
//         await logger.log("info", "Click Customer ");
//         await this.addCustomerTabButton.click();
//        // return this;
//     }
//     async goToOpenAccount() {
//         await logger.log("info", "Click Open Account Tab");
//         await this.openAcountTab.click();
//         return this;
//     }
//     async goToCustomerInfo() {
//         await logger.log("info", "Click Go To Customer Info Tab");
//         await console.log("Going there")
//         await this.customerInfoTab.click();
//         return this;
//     }
//     async addCustomerDetails(firstName,
//         lastname, postalCode) {
//         await this.firstNameField.sendKeys(firstName);
//         await browser.sleep(3000);
//         await this.lastNameField.sendKeys(lastname);
//         await  browser.sleep(3000);
//         await  this.postalCodeField.sendKeys(postalCode);
//         await browser.sleep(3000);
//         await this.addCustomerButton.click();
//         await logger.log("info", "Customer Details entered successfully");
//     }
//     async openAccount(customerSelectIndex,currencySelectVal){
//         await console.log(customerSelectIndex + "Indexxx");
//         await console.log(currencySelectVal + "Currency Select Val");
//        var select:SelectWrapper =new SelectWrapper();
//         await select.selectByIndex(this.customerSelect,customerSelectIndex);
//         await select.selectByPartialText(this.currencySelect,currencySelectVal);
//         await this.processButton.click();
//         await logger.log("info", "Open Account performed successfully");
//     }
//      async searchCustomerDetails(searchName:string){
//     await this.searchCustomerField.sendKeys(searchName);
// 	await element(by.repeater("cust in Customers").row(0).column("fName")).getText()
// 			.then(function(text) {
// 				console.log(text);
// 			});
// 	await logger.log("info", "Customer Details Fetched successfully");
//     } 
// }
//# sourceMappingURL=BankManagerDetailsPage.js.map