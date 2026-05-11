const arr=[5,10,17,36,49,58,60,72,89,92]
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor(
            (left + right) / 2
        );

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}
console.log("Index of 49:", binarySearch(arr, 49));
console.log("Index of 10:", binarySearch(arr, 10));
console.log("Index of 89:", binarySearch(arr, 89));