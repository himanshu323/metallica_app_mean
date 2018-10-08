// Because this file imports from  protractor, you'll need to have it as a
// project dependency. Please see the reference config: lib/config.ts for more
// information.
//
// Why you might want to create your config with typescript:
// Editors like Microsoft Visual Studio Code will have autocomplete and
// description hints.
//
// To run this example, first transpile it to javascript with `npm run tsc`,
// then run `protractor conf.js`.
import { Config, browser } from 'protractor';
declare const allure: any;


export let config: Config = {
  framework: 'jasmine2',

  onPrepare : function() {
		var AllureReporter = require('jasmine-allure-reporter'); 

		jasmine.getEnv().addReporter(new AllureReporter({
			resultsDir : 'allure-results'

		}));
   
  
    jasmine.getEnv().afterEach(function(done){
      browser.takeScreenshot().then(function (png) {
        allure.createAttachment('Screenshot', function () {
          return new Buffer(png, 'base64')
        }, 'image/png')();
        done();
      })
    });
  
  },
  
  capabilities: {
    browserName: 'chrome'
  },
  specs: [ './TestApp/specs/tradeSearchTest.js' ],
 

  // You could set no globals to true to avoid jQuery '$' and protractor '$'
  // collisions on the global namespace.
  noGlobals: true
  ,
  directConnect:true
  ,
  // Options to be passed to Jasmine.
	jasmineNodeOpts : {
		defaultTimeoutInterval : 120000

	}
};
