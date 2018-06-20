//var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

// conf.js
exports.config = {
seleniumAddress: 'http://localhost:4444/wd/hub',
getPageTimeout: 60000,
allScriptsTimeout: 500000,
framework: 'custom',
// path relative to the current config file
frameworkPath: require.resolve('protractor-cucumber-framework'),
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

specs: [ 'test/features/Check_RoundedValues_WeatherForecast.feature' ],

cucumberOpts: {
  require: 'features/step_definitions/Check_RoundedValues_WeatherForecast.js',
  tags: false,
  //format: 'pretty',
  profile: false,
  'no-source': true
},
/*
onPrepare: function() {
	jasmine.getEnv().addReporter(new Jasmine2HtmlReporter ({
		savePath : 'Results/'         
     }));	
}
*/
}
