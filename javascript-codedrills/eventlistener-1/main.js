var userText;

// create a key press listener
document.onkeyup = function(input) {
    var userKey = input.key.toLowerCase();
    console.log(userKey);
    // check whether the user pressed the "h" key
    if (userKey === "h") {
        userText = confirm('Would you like to change the behavior of the "k" button?');
    }

    // check whether the user pressed the "k" key
    if (userKey === "k") {
        if (userText === true) {
            alert("Hello");
        } else {
            alert("No Thanks");
        }
    }
}
