var farm = ['Pig', 'Cow', 'Chicken', 'Dog', 'Horse', 'Sheep'];

    if(farm[0] !== 'godzilla' ) {
        alert('RWAR');
}
if(farm[5] === 'mothra'){
    alert('SCREECH');
}

var dog = "Spot";
var cat;
var car;
var city;

cat = "Farley";
city = "San Francisco";
car = "Prius";

console.log('see ' + dog + ' run');

//"I drive Farley around San Francisco in my Prius" without explicityly

console.log('I drive ' + cat + ' around ' + city + ' in my ' + car);


// declare a variable budget and assign it a value of 5000

var budget = 5000;

// declare a variable rentCost and assign it a value of 1500

var rentCost = 1500;


// declare a variable utilitiesCost and assign it a value of 150

var utilitiesCost = 150;

// declare a variable foodCost and assign it a value of 250

var foodCost = 250;


// declare a variable transportationCost and assign it a value of 350

var transpportationCost = 350;

// declare a variable computerCost and assign it a value of 2000

var computerCost = 2000;

// write an if statement that checks whether the sum of all our costs is within the budget.
// if it is within budget, console log out the total cost, otherwise, create an alert telling
// us the sum of all the costs.

var sum = rentCost + utilitiesCost + foodCost + foodCost + transpportationCost + computerCost;
console.log(sum);

if(sum < budget){
    console.log('totalCost:' + sum);
} else {
    alert('The sum of all costs ' + sum);
}
