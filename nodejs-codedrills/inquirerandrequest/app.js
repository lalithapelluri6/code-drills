const request = require("request");
const inquirer = require("inquirer");

//Api key

let apiKey = '717772af6d87c0469e593c42610acf44';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

inquirer.prompt([
    {
        type: "input",
        message: "Enter city name ",
        name: "city"
    }
]).then(function(userSelect){
   request(url + userSelect.city, function(err,response,body){
       if(!err && response.statusCode === 200){
           var weather = JSON.parse(body);
           console.log(wweather.name,weather.country);
       } else {
           console.error(err);
       }
   });
});
