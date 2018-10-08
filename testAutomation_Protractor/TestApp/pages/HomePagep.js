"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const BasePage_1 = require("../../utilities/BasePage");
const log_1 = require("../../utilities/log");
const Locators = {
    customerLoginButton: {
        type: BasePage_1.IdentificationType[BasePage_1.IdentificationType.ButtonText],
        value: "Customer Login"
    },
    bankManagerLoginButton: {
        type: BasePage_1.IdentificationType[BasePage_1.IdentificationType.NgClick],
        value: "manager()"
    }
};
class HomePage extends BasePage_1.BasePage {
    constructor() {
        super(...arguments);
        this.customerLoginButton = this.ElementLocator(Locators.customerLoginButton);
        this.bankManagerLogin = this.ElementLocator(Locators.bankManagerLoginButton);
    }
    loginAsCustomer() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.customerLoginButton.click();
            yield log_1.winston.log("info", "Logged Into Customer Dashboard Successfully");
        });
    }
    loginAsBankManager() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.bankManagerLogin.click();
            yield log_1.winston.log("info", "Logged Into Bank Manager  Dashboard Successfully");
        });
    }
}
exports.HomePage = HomePage;
//# sourceMappingURL=HomePagep.js.map