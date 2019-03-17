
var userPressed = [];

var alpha = "abcdefghijklmnopqrstuvwxyz"

// create a key press listener
document.onkeyup = function(input){
    var userKey = input.key.toLowerCase();

    // create an if statement that checks whether the key is part of our string named alphabet
    if (alpha.includes(userKey)){

        document.getElementById("user-key").textContent = userKey;
        userPressed.push(userKey);

        document.getElementById("user-Pressed").textContent = userPressed;
    } else {

        document.getElementById("user-key").textContent = "Please press a valid key";
    }

}
