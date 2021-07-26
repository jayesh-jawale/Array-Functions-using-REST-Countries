//1. create an XHR object
var request = new XMLHttpRequest();
//2. open a connection
request.open('GET', 'https://restcountries.eu/rest/v2/all', true);
//3. send a connection
request.send();
//4. once data has been recieved successfully, we have to convert the data
request.onload = function(){
    var data = JSON.parse(this.response);

    // Get all countries from Asia continent / region using Filter function
    var region = data.filter(element => element.region == "Asia");
    console.log(region);

    // Get all the countries with population of less then 2 lacs using Filter function
    var population = data.filter(element => element.population<200000);
    console.log(population);

    // Print all countries which use US Dollars(USD) as currency
    var currency = data.filter(element => element.currencies[0].code == "USD");
    console.log(currency);

    // Print sum of total population of countries by using Reduce function
    var population = data.reduce((accumalator, element) => {
     return accumalator + element.population;
    },0)
    console.log(population);
}