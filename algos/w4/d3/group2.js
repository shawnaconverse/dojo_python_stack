/*
  Recursive Binary Search
  Input: SORTED array of ints, int value
  Output: bool representing if value is found
  Recursively search to find if the value exists, do not loop over every element.
  Approach:
  Take the middle item and compare it to the given value.
  Based on that comparison, narrow your search to a particular section of the array
*/

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
  var length = sortedNums.length
  var midPoint = Math.floor(sortedNums.length/2)
  var newArr = sortedNums
  if(sortedNums[midPoint] == searchNum){
    return true
  }if(searchNum > sortedNums[midPoint]){
    newArr = sortedNums.slice(0, Math.floor(sortedNums.length-1/2))
  }if(searchNum < Math.floor(sortedNums.length-1/2)){
    newArr = sortedNums.slice(Math.floor(sortedNums.length-1), Math.floor(sortedNums.length-1/2))
  }binarySearch(sortedNums, searchNum)
}

console.log(binarySearch(nums1, searchNum1))
console.log(binarySearch(nums2, searchNum2))
console.log(binarySearch(nums3, searchNum3))

//base case- conditional boolean
// FORWARD PROGRESS-greater than or less than conditional that removes half of the the array that is not represented
// RECURSIVE CALL- calls the function again