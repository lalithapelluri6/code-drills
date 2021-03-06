// Lets build another bubble sort with a while loop instead of nested for loops

// Define a boolean outside your while loop to track if an element has been swapped

// the while loop should contain the for loop that iterates through the array and
// continue until you've been able to iterate through the array without swapping
// any elements


function bubbleSortTwo(inputArr) {
    // ================= code goes here ===========================


    let len = inputArr.length;
    let swap;
    do {
        swap = false;
        for (let i = 0; i < len; i++) {
            if (inputArr[i] > inputArr[i + 1]) {
                let tmp = inputArr[i];
                inputArr[i] = inputArr[i + 1];
                inputArr[i + 1] = tmp;
                swap = true;
            }
        }
    } while (swap);
    return inputArr;

    // ============================================================
}


var age = [34, 23, 3, 76, 20, 84, 18, 9];
var newAge = bubbleSortTwo(age);
console.log(newAge)
