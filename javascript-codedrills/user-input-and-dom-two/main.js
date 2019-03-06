var wantBoba = confirm("Welcome to the Boba Shop! Would you like a Boba?");
if(wantBoba === true) {
    var drinkFlavour = prompt("What Flavour would you like to drink?");
    document.write("Your " + drinkFlavour + " boba will be ready soon!");
} else {
    document.write("Goodbye! Come back soon!");
}
