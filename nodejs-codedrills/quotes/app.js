var fs = require("fs");
var args = process.argv;

var arr = [];
var Quotes;
var Person = '';
var msg = "That person never said anything";

for(var i=0; i<args.length; i++){
    arr.push(args[i]);
}

fs.readFile("quotes.txt", "utf8", function(err,data){
    Quotes = data.split('');
    for(var j=0; j<Quotes.length; j++){
        var result = Quotes[i];
        message = result[0];
    }
    console.log(message);
});
