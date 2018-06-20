var Funcs =  require("../acceptance-testing-master/FunctionLib/FunctionLib.js")
var PgObj =  require("../acceptance-testing-master/PageObject/PageObject.js")
var PgObj_new = new PgObj();


describe('Get Weather Forecast', function() {  

  const flow = browser.controlFlow();


  var editCity = PgObj_new.editCity;
  var elmFiveDayForecast = PgObj_new.elmFiveDayForecast;
  var elmDailyForecast = PgObj_new.elmDailyForecast;
 
  var elmHourlyForecast = PgObj_new.elmHourlyForecast;
  var  allMaxTemp = PgObj_new.allMaxTemp;
  var  allMinTemp = PgObj_new.allMinTemp;
  var  allspeed = PgObj_new.allspeed;
  var  allrainfall = PgObj_new.allrainfall;
  

  it('should navigate to the Get Weather Forecast page', function() { 
    browser.waitForAngularEnabled(false)
    browser.ignoreSynchronization = true; //Protractor expects to work with angular websites by default,
                                          // and we are using Protractor to validate the non-angular website, so we need to tell this to Protractor explicitly 
    browser.get('http://localhost:3000/'); 

    //verify page title
    browser.driver.getTitle().then(function(pageTitle) {
       expect(pageTitle).toEqual('5 Weather Forecast'); 
      });
      
  });  

  it('should get 5 day weather forecast', function() {  
   
    
    //search for perth city
    editCity.clear(); 
    editCity.sendKeys("perth"); 
    editCity.sendKeys(protractor.Key.ENTER);
    //result should be 5 day forcast
    elmFiveDayForecast.count().then(function(intCount) {
      expect(intCount).toBe(5);
    });


  });  



  it('should get 3 hourly forecast', function() { 
    
        var icounter =  0; 
        //select or expand any day
        flow.execute(function(){
          
          browser.executeScript("arguments[0].click()",elmDailyForecast);
                
        });
    
        flow.execute(function(){
                 
          elmHourlyForecast.count().then(function(intCount) {
            //console.log("intCount" + intCount);
            for (var i =0; i<intCount ; i++)
            {
              (function(i) {
                //console.log("i" + i);
                elmHourlyForecast.get(i).isDisplayed().then(function (isVisible) {
                  if (isVisible) {
                    
                    icounter++
                  } 
                });
              })(i);
            }
      
      
            
            });    
        });
        
        //After selection or expanding the day, there should be only 3 hourly forecast
        flow.execute(function(){
          expect(icounter).toBe(3);
                
        });
        
     
  });
       
       
    
    
  it('should should summarise the 3 hour data AND rounded down', function() { 
    
 
    
   
     //verify all the Daily forecast details
    Funcs.Func_find_elm(allMaxTemp);
    Funcs.Func_find_elm(allMinTemp);
    Funcs.Func_find_elm(allspeed);
    Funcs.Func_find_elm(allrainfall);
   
  });  
  
  




  it('able to hide 3 hourly forecast', function() { 
       
    // browser.executeScript("arguments[0].click()",elmDailyForecast);
    //   var lstobj_Filtered = allrainfall.filter(function(elem) {
    //       return elem.isDisplayed(); 
    //   });

    //   lstobj_Filtered.count().then(function(intcount) {
    //     expect(intcount).toBe(5); 
    //   })   


    var icounter =  0; 
    //select or expand any day
    flow.execute(function(){
      
      browser.executeScript("arguments[0].click()",elmDailyForecast);
            
    });

    flow.execute(function(){
             
      elmHourlyForecast.count().then(function(intCount) {
        //console.log("intCount" + intCount);
        for (var i =0; i<intCount ; i++)
        {
          (function(i) {
            //console.log("i" + i);
            elmHourlyForecast.get(i).isDisplayed().then(function (isVisible) {
              if (isVisible) {
                
                icounter++
              } 
            });
          })(i);
        }
  
  
        
        });    
    });
    
    //After selection or expanding the day, there should be only 3 hourly forecast
    flow.execute(function(){
      expect(icounter).toBe(1);
            
    });
        
        
  }); 
    





});