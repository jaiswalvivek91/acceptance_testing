Here I have followed 2 approach to complete the task.

1. Used BDD (cucumber to explain manual acceptance test cases) and created features files with corresponding step defination file sturcture.

	Find : acceptance-testing-master -> test  -> features  - > step_definitions
	refer : Cucumber.conf.js file as config file for cucumbeer implementation

2. Used jasmine + protractor to automated the test cases using describe and it block.
 	refer : config.js file as config file 
	        GetWeatherForecast.js as spec fille 
	         PageObject.js for page object model
	         FunctionLib.js for reusable function.


#After execution HTML report will generate in results folder along with screen shots.

# I could have used Excel or json file to make the automated test cases as data driven. 



Note : npm and protractor has to be installed in your system to run the uatomated test cases.

step 1 : Webdriver-manager start
step 2 : navigate to the path where you have your config.js fil in cmd prompt.
step 3: run protractor config.js 


	
