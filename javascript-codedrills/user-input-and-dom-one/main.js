var userName = prompt("What is your name?");
alert("Welcome to the Sandwich Shop," + userName + "!");

var wantsSandwich = confirm("Would you like a sandwich?");

if (wantsSandwich === true) {
    document.write("Your sandwich will be ready soon!");
} else {
    document.write("Goodbye " + userName + "! Come back soon!");
}
