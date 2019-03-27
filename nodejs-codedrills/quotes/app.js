\
var fs = require("fs");
var args = process.argv[2];

var arr = [];
var Quotes;
var msg = "That person never said anything";
var message;

for(var i=0; i<args.length; i++){
    arr.push(args[i]);
}
console.log(arr);

fs.readFile("./quotes.txt", "utf8", function(err,data){
    Quotes = data.split(';');
    console.log(Quotes);
    for(var j=0; j<Quotes.length; j++) {
        var result = Quotes[j].split('-');
        console.log(result);
        if (result === null) {
            console.log(msg);
        } else if(result[1]=== args){
            message = result[0];
        }

    }
    console.log(message);
});
