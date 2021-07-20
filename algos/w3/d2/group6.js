// Algos 07/20/2021

/* 
Array: Binary Search (non recursive)
Given a sorted array and a value, return whether the array contains that value.
Do not sequentially iterate the array. Instead, ‘divide and conquer’,
taking advantage of the fact that the array is sorted .
*/
// Let's go!! -Ice
const nums1 = [1, 3, 5, 6];
const searchNum1 = 4;
const expected1 = false;

const nums2 = [4, 5, 6, 8, 12];
const searchNum2 = 5;
const expected2 = true;

const nums3 = [3, 4, 6, 8, 12];
const searchNum3 = 3;
const expected3 = true;

function binarySearch(sortedNums, searchNum) {

    let start = 0; // This is the start of the array
    let end = sortedNums.length - 1; // This is the end of the array

    while( start <= end) { 
        let i = Math.floor((start + end) / 2 ); // Where i is the middle of the array, Math.floor is rounding the result down

        if ( sortedNums[i] === searchNum){ // If the middle index of sortedNums is equal to the specific number return true.
            return true;

        } else if ( sortedNums[i] < searchNum ) { // If the middle index is less than the specific number add 1 to our start variable
            start = i + 1;

        } else { // If the middle index is less than the specific number subtract 1 from our end variable
            end = i - 1;
        }
    }
    return false; // If the specific number is never found, return false
}

console.log(binarySearch(nums1, 4))

console.log(binarySearch(nums2, 5))

console.log(binarySearch(nums3, 3))