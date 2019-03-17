var ourArray = [];
ourArray.push(1);
ourArray.push("hello");
ourArray.push(false);
ourArray.push(84);
ourArray.push("world");

console.log(ourArray);

var numArray = [2, 65, 3, 7, 39, 22, 11, 94, 299, 9, 20, 21, 51, 37];

// iterate through numArray and create an individual console log for every number greater than 50

for(var i=0; i<numArray.length; i++) {
    if (numArray[i] > 50) {
        console.log(numArray[i]);
    }
}

for(var j=0; j<numArray.length; j++){

// iterate through numArray and console log the sum of all the numbers

    var sum =0 ;
    sum = sum + numArray[j];
    console.log(sum);
}

// iterate through numArray and console log the sum of all the numbers greater than 50
var sum = 0;
for (var i = 0; i < numArray.length; i++) {
    if (numArray[i] > 50) {
        sum = sum + numArray[i];
    }
}
console.log(sum);

// iterate through numArray and console log the sum of all the even numbers

for(var k=0; k<numArray.length; k++) {
    if((numArray[k] % 2) === 0) {
        sum = sum + numArray[k];
    }
}
console.log(sum);

console.log("--------------seperator-3-----------------");

var fruits = [
    "Apple", "Orange", "Banana", "Pomelo", "Apple", "Kiwi", "Peach", "Banana", "Grape", "Tomato",
    "Kiwi", "Apple", "Watermelon", "Lemon", "Pomelo", "Apple", "Banana", "Peach", "Apricot", "Grape"];

// iterate through fruits and console log the number of times "Apple" appears in the array

var count = 0;

for(var i=0; i< fruits.length; i++){
    if(fruits[i] === "Apple"){
        count = count+1;
    }
}
console.log("Apple appeared" + count + "times");


// ------------------------------------
// iterate through fruits and console log the number of times "Peach" appears in the array


for(var j=0; j<fruits.length; j++){
    if(fruits[j] === "Peach") {
        count = count + 1;
    }
}
console.log("Peach appeared" + count + "times");

//-------------------------------------------
// iterate through fruits and console log the number of fruits that start with "P" in the array
var count = 0;
for(var i=0; i<fruits.length; i++){
    if(fruits[i].charAt(0) === "p"){
        count++;
    }
}
console.log("P letter appeared" + count + "times");


//--------------------------------------------------
// create a new empty array named uniqueFruits

var uniqueFruits = [];

// iterate through fruits and populate uniqueFruits with only unique values from fruits

for(var i=0; i<fruits.length; i++){
    if (!uniqueFruits.includes(fruits[i])) {
        uniqueFruits.push(fruits[i]);
    }
}
console.log(uniqueFruits);

console.log("----------------seperator-4---------------");

var twoDimArray = [
    [54, 6, 7, 46, 78],
    [43, 9, 6, 65, 65],
    [32, 1, 44, 1, 23],
    [55, 12, 2, 34, 2],
    [2, 12, 44, 2, 12]];

//console log first array
console.log(twoDimArray[0]);

// iterate through the first array inside twoDimArray and console log all the numbers less than 25

for (var i = 0; i < twoDimArray[0].length; i++){
    if (twoDimArray[0][i] < 25) {
        console.log(twoDimArray[0][i]);
    }
}
//------------------------------------

// console log second array

console.log(twoDimArray[1]);

// iterate through the second array inside twoDimArray and console log all the numbers less than 25

for (var i = 0; i < twoDimArray[1].length; i++){
    if (twoDimArray[1][i] < 25) {
        console.log(twoDimArray[1][i]);
    }
}

//--------------------------------------
//console log third array

console.log(twoDimArray[2]);

// iterate through the third array inside twoDimArray and console log all the numbers less than 25

for (var i = 0; i < twoDimArray[2].length; i++){
    if (twoDimArray[2][i] < 25) {
        console.log(twoDimArray[2][i]);
    }
}

//------------------------------------------
//console log 4th array
console.log(twoDimArray[3]);
// iterate through the fourth array inside twoDimArray and console log all the numbers less than 25

for (var i = 0; i < twoDimArray[3].length; i++){
    if (twoDimArray[3][i] < 25) {
        console.log(twoDimArray[3][i]);
    }
}

//----------------------------------------------
//console log 5th array

console.log(twoDimArray[4]);

//iterate through the fifth array inside twoDimArray and console log all the numbers less than 25

for (var i = 0; i < twoDimArray[4].length; i++){
    if (twoDimArray[4][i] < 25) {
        console.log(twoDimArray[4][i]);
    }
}

//console.log("     odd numbers      ");
// sum of all numbers that are multiples of three
