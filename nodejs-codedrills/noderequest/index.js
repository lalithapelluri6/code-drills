const request = require('request');
const args = process.argv[2];
let city = args.c || 'SanFransisco';


let apiKey = '717772af6d87c0469e593c42610acf44';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

request(url, function (err, response, body) {
    if(err){
        console.log('error:', error);
    } else {
        console.log('body:', body);

let weather = JSON.parse(body);

let message = `It's ${weather.main.temp} degrees in
               ${weather.name}!`;
console.log(message);

}
});
