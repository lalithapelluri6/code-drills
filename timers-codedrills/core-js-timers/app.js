// Practice with timers


console.log("==================== Question 01 ====================");
// Create a timer that creates an alert that says "Question 1" after 5 seconds
function questionOne () {
    alert("Question 1");
}

setTimeout(questionOne, 5000);



console.log("==================== Question 02 ====================");
// Create a timer that creates an alert that says "Question 2" after 15 seconds

function questiontwo () {
    alert("Question 2");
}

setTimeout(questiontwo, 15000);

// Remove the timer you just made for Question 2

clearTimeout(questiontwo);

console.log("==================== Question 03 ====================");
// Create a timer that creates an alert that says "Question 3 part 1" after 15 seconds

function questionthree () {
    alert("Question 3 part 1");
}

setTimeout(questionthree, 15000);

// Create a timer that creates an alert that says "Question 3 part 2" after 16 seconds

function questionthreepart2 () {
    alert("Question 3 part 2");
}

setTimeout(questionthreepart2, 15000);

console.log("==================== Question 04 ====================");
// Remove the timer from Question 3 part 1
clearTimeout(questionthree);


console.log("==================== Question 05 ====================");
// Create a timer that plays a sound after 11 seconds and console logs "Question 5 Completed!"

setTimeout(function(){
    console.log('Question 5 Completed!')},11000 );
