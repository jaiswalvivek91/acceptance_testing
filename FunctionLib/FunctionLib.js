module.exports={


     //Function to check hourly details (should be more than 0)
    Func_find_elm : function(lstobj) {
      //var Funcs =  require("../acceptance-testing-master/FunctionLib/FunctionLib.js")


      var lstobj_Filtered = lstobj.filter(function(elem) {
          return elem.isDisplayed(); 
      });
    
      lstobj_Filtered.count().then(function(intcount) {
        expect(intcount).not.toBe(0);
        for (var i =0; i<intcount ; i++)
        {
          (function(i) {
            //console.log("i" + i);
            lstobj_Filtered.get(i).getText().then(function (text) {
              //console.log(text);
              if ((typeof x === 'number') && (x % 1 === 0))
              {
                
                expect(true).toBe(true);
              }
              
              
            });
          })(i);
        }
      });
    },
  
    isInteger : function(x) {

      return (typeof x === 'number') && (x % 1 === 0);
    }

}
