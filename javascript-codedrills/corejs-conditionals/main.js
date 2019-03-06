var characterOneName = "Mr. Farley";

var characterOneName = "Ms. Farley";

var characterOneAge = 15;

characterOneAge = 6;

var characterOneSalary = 100000.00;

var characterOneProfession = "Web Developer";

var characterOneSpecies = "cat";

var characterOneLocation = " San Francisco, CA";

var characterOneRent = 2000.00;

var characterOneExpenses = 1500.00;

var characterOneYearlyRent = characterOneRent * 12;

var characterOneYearlyExpenses = characterOneExpenses * 12;

var characterOneYearlySavings = characterOneSalary - (characterOneYearlyRent + characterOneYearlyExpenses);

//chapter two

var characterTwoName = "Mr. Snuggles";

var characterTwoAge = 8;

var characterTwoProfession = "Accountant";

var characterTwoSpecies = "mouse";

var characterTwoLocation = "Oakland, CA";

var characterTwoRent = 4000.00;

var characterTwoSalary = 90000.00;

var characterTwoExpenses = 500.00;

var characterTwoYearlyRent = characterTwoRent * 12;

var characterTwoYearlyExpenses = characterTwoExpenses * 12;

var characterTwoYearlySavings = characterTwoSalary - (characterTwoYearlyRent + characterTwoYearlyExpenses);



if (characterOneName === "Mr. Farley") {
    console.log("hello Mr. Farley");
} else if (characterOneName === "Ms. Farley") {
    console.log("hello Ms. Farley");
} else {
    console.log("hello stranger");
}

if (characterOneAge > characterTwoAge) {
    console.log(characterOneName + " is older");
} else {
    console.log(characterTwoName + " is older");
}


if ((characterOneLocation === "San Francisco") && (characterTwoLocation === "New York")) {
    console.log("Cross Country Friends!");
} else {
    console.log("Local Friends!");
}

if (characterOneYearlySavings > characterTwoYearlySavings){
    console.log(characterOneName + " is a high roller!");

} else {
    console.log(characterTwoName + " is a high roller!");
}

if (characterOneProfession === "Web Developer" || characterTwoProfession === "Data Analyst"){
    console.log("Hey look! One of them is in the tech industry!");
} else {
    console.log("Aww, I wanted to meet someone in tech :(");
}
