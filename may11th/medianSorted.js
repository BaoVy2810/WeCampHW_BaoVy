function findMedianSortedArrays(nums1, nums2) {
    // Step 1: merge the two sorted arrays (you already know how!)
    // Step 2: find the median of the merged array
    // Examples:
    // findMedianSortedArrays([1,3], [2]) -> 2.0
    // findMedianSortedArrays([1,2], [3,4]) -> 2.5
    let merged = [...nums1, ...nums2].sort((a, b) => a - b);
    let n=merged.length;
    if (n % 2 === 1) {
        return merged[Math.floor(n / 2)];
    } else {
        let mid1 = merged[n / 2 - 1];
        let mid2 = merged[n / 2];

        return (mid1 + mid2) / 2;
    }
}
console.log(findMedianSortedArrays([1,3], [2]));
console.log(findMedianSortedArrays([1,2], [3,4]));
// function findMedianSortedArrays(nums1, nums2) {
//     // Step 1: merge the two sorted arrays (you already know how!)
//     // Step 2: find the median of the merged array
//     // Examples:
//     // findMedianSortedArrays([1,3], [2]) -> 2.0
//     // findMedianSortedArrays([1,2], [3,4]) -> 2.5
//     const merged = [];
//     const n=merged.length;
//     const mid=Math.floor(n/2);

//     if (n % 2 === 0) {
//         return (merged[mid-1] + merged[mid]) / 2;
//     } else {
//         return merged[mid];
//     }   
// }
// console.log(findMedianSortedArrays([1,3], [2]));
// console.log(findMedianSortedArrays([1,2], [3,4]));