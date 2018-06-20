
// config.js


var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
var today =  new Date(),
timeStamp = today.getMonth() + 1 + '-' + today.getDate() + '-' + today.getFullYear() + '-' + today.getHours() + 'h-' + today.getMinutes() + 'm';
var reporter = new Jasmine2HtmlReporter({
  savePath: './../acceptance-testing-master/Results/',
  cleanDestination: false,
  fileNameSuffix: timeStamp,
  consolidate : false,
  consolidateAll : false,


});




exports.config = {
allScriptsTimeout: 120000,
seleniumAddress: 'http://localhost:4444/wd/hub',
framework: 'jasmine',

/*
capabilities: {
    'browserName': 'chrome',
    'binary': 'C:/Program Files/Google/Chrome/Application/chrome.exe'
  },
*/
capabilities: {
  'browserName': 'firefox',
  'moz:firefoxOptions': {
    'args': ['--safe-mode']
  }
},

specs: [ "../acceptance-testing-master/GetWeatherForecast.js" ],



onPrepare: function() {
  browser.manage().timeouts().setScriptTimeout(60000);
  jasmine.getEnv().addReporter(reporter);
	// jasmine.getEnv().addReporter(new Jasmine2HtmlReporter ({
	// 	savePath : 'Results/'         
  //    }));	
},


jasmineNodeOpts: {
  defaultTimeoutInterval: 120000
},

}
