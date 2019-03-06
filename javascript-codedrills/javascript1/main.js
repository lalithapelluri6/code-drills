//this is unassigned variable
var subject;

//subject is assigned a value of string
subject = "programmers";
console.log(subject);
//declare a variable called firstname with empty string
var firstName = "";
firstName = "Ada";

//declare a variable called lastname with a string
var lastName = "Love lace";


//declare a variable called fullName assign concatenated string of firstname and lastname.
var fullName = firstName + lastName;
console.log(fullName);

//declare a variable called proffession and assign avalue of string
var profession = "Computer Programmer";

//declare a variable called knownfor assign a value with first computer programmer
var knownFor = "first computer programmer";

//declare a variable called first algorithm assign a string value.
var  firstAlgorithm = "Analytical Engineering";

//declare a variable called cityLocation assign a value to it.
var cityLocation = "London";
console.log(cityLocation);

//declare a variable called countryLocation and assign a value.
var countryLocation = "England";
console.log(countryLocation);

//declare a variable called nationality and assign a value to it
var nationality = "British";
console.log(nationality);

//integers

var birthYear = 1815;
var deathYear = 1852;
var ageAtPassing = deathYear - birthYear;
var yearofPublish = 1842;
let ageAtYearofPublish = yearofPublish - birthYear;

//console log

console.log("firstName:" + firstName);
console.log("lastName:" + lastName);
console.log("profession:" + profession);
console.log("Birth Year:" + birthYear);

//concatenate

var statementOne = "Programmers:" + fullName + " is a " + nationality + knownFor + " born in " + birthYear;
console.log(statementOne);

// "She is commonly referred to as the first computer programmer"
var statementTwo = "she is commonly referred to as the" + knownFor;
console.log(statementTwo);

// "In 1842 she published the first Algorithm, the Analytical Engine, at the age of 27."
var statementThree = "In " + yearofPublish + " she published the first Algorithm, " + firstAlgorithm + " ,at the age of " + ageAtYearofPublish;
console.log(statementThree);

// "She was a British Citizen who lived in London, England until her passing in 1852 at the age of 37.
var statementFour = "she was a" + nationality + "citizen" + "who lived in" + countryLocation + "England until her passing in" + deathYear + "at the age of 37";
console.log(statementFour);
