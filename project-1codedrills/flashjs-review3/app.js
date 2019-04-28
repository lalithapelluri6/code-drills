console.log("////////////////////////////// QUESTION 3.1 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\")

/*Write a function called "averageNumbers".

  Given an array of numbers, "averageNumbers" returns their average.

  *Bonus If given an empty array, it should return 0*

*/

function averageNumbers(nums) {
    // your code here

    if(nums.length < 1){
        return 0;
    }
    //finding length of nums
   var len = nums.length;
    var add = 0;
for(var i=0; i<len; i++) {
     add = add + nums[i];
}
    var average = add / len;
return average;

    // code ends here
}

var input = [1, 2, 3, 4, 5];

var output = averageNumbers(input);
console.log(output); // --> 3

console.log("////////////////////////////// QUESTION 3.2 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\")

/*Write a function called "keysCounter".

Given an object, "keysCounter" returns how many properties the given object has.

*/
function keysCounter(obj) {
    // your code here
    var counter = 0;
    counter = Object.keys(obj).length;
return counter;
    // code ends here
}

var obj = {
    a: 1,
    b: 2,
    c: 3
};

var output = keysCounter(obj);
console.log(output); // ---> 3


