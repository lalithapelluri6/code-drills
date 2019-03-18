// build a function that uses bubble sort to sort an array from
// highest value to lowest value and returns the new sorted array

function bubbleSort(Arr) {
// ================= code goes here ===========================
    let len = Arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (Arr[j] > Arr[j + 1]) {
                let tmp = Arr[j];
                Arr[j] = Arr[j + 1];
                Arr[j + 1] = tmp;
            }
        }
    }
    return Arr;


// ============================================================
}
console.log(bubbleSort([34, 23, 3, 76, 20, 84, 18, 9]));
var testArray = [34, 23, 3, 76, 20, 84, 18, 9];
testArray = bubbleSort(testArray);
console.log(testArray);
