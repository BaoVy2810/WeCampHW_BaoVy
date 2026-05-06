const array = [3, 9, 57, 89, 2, 71];
function findMax(arr) {
    let max = arr[0]; 
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) { 
            max = arr[i]; 
        }
    }
    return max;
}
const maxValue = findMax(array);
console.log("The maximum value in the array is:", maxValue);