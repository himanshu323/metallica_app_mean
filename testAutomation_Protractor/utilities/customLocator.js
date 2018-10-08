"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class customLocators {
    addLocators() {
        protractor_1.by.addLocator("ngClick", (toState, parentelement) => {
            console.log("Adding locators");
            var using = parentelement || document;
            var prefixes = ['ng-click'];
            for (var i = 0; i < prefixes.length; i++) {
                var selector = "*[" + prefixes[i] + "='" + toState + "']";
                var inputs = using.querySelectorAll(selector);
                if (inputs.length) {
                    return inputs;
                }
            }
        });
        protractor_1.by.addLocator("ngShow", (toState, parentelement) => {
            var using = parentelement || document;
            var prefixes = ['ng-show'];
            for (var i = 0; i < prefixes.length; i++) {
                var selector = "*[" + prefixes[i] + "='" + toState + "']";
                var inputs = using.querySelectorAll(selector);
                if (inputs.length) {
                    return inputs;
                }
            }
        });
    }
}
exports.customLocators = customLocators;
//# sourceMappingURL=customLocator.js.map