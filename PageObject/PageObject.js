var PgObject =  function(){

this.editCity = element(by.id('city'));
this.elmFiveDayForecast = element.all(by.css('.summary'));
this.elmDailyForecast = element.all(by.css('.summary')).get(1);

this.elmHourlyForecast = element.all(by.xpath('//div[@class="details"]/div[@class="detail"]'));
this.allMaxTemp = element.all(by.xpath('//div[@class="details"]/div[@class="detail"]//span[@class="max"]'));
this.allMinTemp = element.all(by.xpath('//div[@class="details"]/div[@class="detail"]//span[contains(@class,"min")]'));
this.allspeed = element.all(by.xpath('//div[@class="details"]/div[@class="detail"]//span[@class="speed"]'));
this.allrainfall = element.all(by.xpath('//div[@class="details"]/div[@class="detail"]//span[@class="rainfall"]'));



}


module.exports = PgObject;