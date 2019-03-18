// `this` jQuery Business

// The README.md has instructions for this exercise


// This function should populate our page with the 4 buttons we need
// We will be defining this function right now and invoking it later
function populateButtons() {
    // Your code goes here
    var buttonH = $("<button>");
    buttonH.text("Hello");
    buttonH.attr("data", "Hello");

    var buttonW = $("<button>");
    buttonW.text("World");
    buttonW.attr("data", "World");

    var buttonR = $("<button>");
    buttonR.text("Reset");
    buttonR.attr("data", "Reset");

    var buttonU = $("<button>");
    buttonU.text("User")
    buttonU.attr("id", "user-button")
    buttonU.attr("data", "");



    $("#buttons-area").append(buttonH, buttonW, buttonR);
    $("#user-button-area").append(buttonU);
    // End of your code area
}

// This is jQuery shorthand to a document.ready
// This tells our javascript to wait until the page has finished
// loading before running the code.
$(function () {

    // call on the populateButtons functions we defined above.
    populateButtons();

    // This is the key press listener that saves the key the user pressed.
    // Refer to step 4 on the README
    document.onkeyup = function(event) {
        // Your code goes here

        var prevKeys = $("#user-button").attr("data");
        prevKeys += event.key;
        $("#user-button").attr("data", prevKeys);

        // End of your code area
    }

    // One click listener for all our buttons. You're going to have to figure out
    // which button was clicked and handle the logic for that button inside here
    // Refer to step 3 on the README
    $(document).on("click", "button", function (event) {
        // Your code goes here


        // End of your code area
    });
});

