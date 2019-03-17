// define a function "fun" that console logs "Functions are FUN!"

function fun() {
    return "Functions are FUN!";
}

/* it didn't log answer because we didn't call the function. */

// define a function "thirtySeven" that console logs the sum of 18 and 19

function thirtySeven(){
    var sum = 18 + 19;
    return sum;
}
 console.log(fun());
console.log(thirtySeven());

//// define a function "log" that takes in an argument and console logs that argument

function log(string){
    return string;
}
console.log(log("apple"));

// define a function "hello" that calls on the "log" function to console log "Hello World"

function hello(){
     log("hello world!");
}
// call your hello function

hello();

// define a function "popUp" that creates an alert that says "This is an alert."

function popup() {
    alert("This is an alert!");
}
popup();
// define a function "noPopUp" that creates an alert that says "Okay, you won't get a pop up."
function nopopup() {
    alert("Okay, you won't get a pop up.");
}
nopopup();

// define a function "goodDay" that creates a confirm dialogue asking the user if they are having a nice day
// and uses your "log" function to display the response

function goodday() {
    var res = confirm("Are ypu having a nice day?");
    log(res);
}
goodday();

// define a function "userPopUp" that creates a confirm dialogue asking the user if they would like a popup
// if they answer yes, call upon your "popUp" function; otherwise, call upon your "noPopUp" function
function userPopUp() {
    var response = confirm("would you like a pop up?");
    if (response) {
        popup();
    } else {
        nopopup();
    }
}
userPopUp();

// define a function "userName" that prompts the user for their name and then
// uses your "log" function to display the response
function userName() {
    var name = prompt("What is your name?");
    log(name);
}
userName();

// define a function "favoriteFruit" that prompts the user for their favorite fruit
// and the creates an alert that displays the response

function favoriteFruit() {
    var favFruit = prompt("What is your favorite fruit?");
    alert(favFruit);
}

favoriteFruit();
