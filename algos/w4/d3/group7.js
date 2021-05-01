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

function binarySearch(sortedNums, searchNum){
  if (sortedNums.length === 0) return false
  let searchIndex = Math.floor(sortedNums.length/2)
  if (sortedNums[searchIndex] === searchNum){
      return true
  } else if (sortedNums[searchIndex] > searchNum){
      sortedNums = sortedNums.slice(0, searchIndex)
  } else if (sortedNums[searchIndex] < searchNum){
      sortedNums = sortedNums.slice(searchIndex+1, sortedNums.length)
  }
  return binarySearch(sortedNums, searchNum)
}


console.log(binarySearch(nums1, searchNum1))
console.log(binarySearch(nums2, searchNum2))
console.log(binarySearch(nums3, searchNum3))
