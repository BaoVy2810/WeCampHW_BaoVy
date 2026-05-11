function findRange(arr, target,idx){
    //Given: 
    // arr - sorted array (may have duplicates
    // target- the value to find the range of
    // idx - a valid index where arr[idx] === target
    // return: [startIndex, endIndex]

    // Examples:
    // findRange([4,4,4,4,4], 4, 2) -> [0,4]
    // findRange([1,2,2,2,3], 2, 2) -> [1,3]
    // findRange([1,2,3,4,5], 3, 2) -> [2,2]
    // findRange([7], 7, 0) -> [0,0]

    let start = idx;
    let end = idx;
    while (start > 0 && arr[start - 1] === target) {
        start--;
    }
    while (end < arr.length - 1 && arr[end + 1] === target) {
        end++;
    }
    return [start, end];
}

    console.log(findRange([4,4,4,4,4], 4, 2)); 
    console.log(findRange([1,2,2,2,3], 2, 2)); 
    console.log(findRange([1,2,3,4,5], 3, 2)); 
    console.log(findRange([7], 7, 0));

// start và end bắt đầu tại idx
// Vì đề bài đảm bảo arr[idx] === target
// Vòng while đầu:
// kiểm tra phần tử bên trái có bằng target không
// nếu có thì giảm start
// tiếp tục cho tới khi khác target hoặc chạm đầu mảng
// Vòng while thứ hai:
// kiểm tra phần tử bên phải có bằng target không
// nếu có thì tăng end
// tiếp tục cho tới khi khác target hoặc chạm cuối mảng
// Cuối cùng trả về [start, end]

const arr=[5,10,17,36,49,58,60,72,89,92]
function searchRange1(arr, target) {
    for (let i=0; i<arr.length; i++) {
        if (arr[i] === target) {
            return findRange(arr, target, i);
        }
    }
    return [-1, -1];
}


function searchRange(arr, target) {
    let lo=0;
    let hi=arr.length-1;
    while (lo<=hi) {
        let mid = Math.floor((lo+hi)/2);
        if (arr[mid] === target) {
            return findRange(arr, target, mid);
        } else if (arr[mid] < target) {
            lo = mid + 1;
        } else {
            hi = mid - 1;
        }
    }
    return [-1, -1];
}
console.log("Range of 49:", searchRange(arr, 49));
console.log("Range of 10:", searchRange(arr, 10));
console.log("Range of 89:", searchRange(arr, 89));