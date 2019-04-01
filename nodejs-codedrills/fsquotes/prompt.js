
var fs = require("fs");
var args = process.argv[2];

var arr = [];
for(var i=0; i<args.length; i++){
    arr.push(args[i]);
}
var Quote = arr[arr.length - 1];
args.pop();
var person = arr.join();
console.log(arr);

var finalquote = [];
finalquote.push("-");
finalquote.push(person);

fs.appendFile("./quotes.txt", "utf8", function(err,data){
    Quote = data.split(';');
    console.log("Quotes added");
});
