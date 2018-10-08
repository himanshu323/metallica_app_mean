// import { BasePage } from '../../utilities/BasePage';
// import { HomePage } from '../pages/HomePage';
// import { BankManagerDetailsPage } from '../pages/BankManagerDetailsPage';
// import * as dataFile from "../../data/bankManagerData.json"
// import { JsonFormatter } from 'cucumber';
// import { browser } from 'protractor';
// var basePage = new BasePage();
// var homePage = new HomePage();
// var bankDetailsPage = new BankManagerDetailsPage();
// let data: any = dataFile;
// describe("Testing the Bank Manager E2E", async () => {
// 	it("Logging to Bank Manager", async () => {
// 		await basePage.navigateToURL(data);
// 		await homePage.loginAsBankManager();
// 		await browser.sleep(4000);
// 	});
// 	it("Add Customer", async () => {
// 		await bankDetailsPage.goToAddCustomer();
// 		await browser.sleep(3000);
// 		await bankDetailsPage.addCustomerDetails(data.testData.bankManagerDetailsPage.firstName, data.testData.bankManagerDetailsPage.lastName, dataFile.testData.bankManagerDetailsPage.postalCode);
// 		await basePage.switchToAlert();
// 		await basePage.getAlertText();
// 		await basePage.acceptAlert();
// 	});
// 	it("Open Account", async () => {
// 		await bankDetailsPage.goToOpenAccount();
// 		await bankDetailsPage.openAccount(data.testData.bankManagerDetailsPage.customerSelectIndex, data.testData.bankManagerDetailsPage.currencySelectVal);
// 		await basePage.switchToAlert();
// 		await basePage.getAlertText();
// 		await basePage.acceptAlert();
// 		await expect(true).toBe(false);
// 	});
// 	it("Search Customer Details", async () => {
// 		await bankDetailsPage.goToCustomerInfo();
// 		await bankDetailsPage.searchCustomerDetails(data.testData.bankManagerDetailsPage.searchName);
// 	});
// });
//# sourceMappingURL=BankManagerTest.js.map