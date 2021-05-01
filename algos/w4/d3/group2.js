/*
  Recursive Binary Search
  Input: SORTED array of ints, int value
  Output: bool representing if value is found
  Recursively search to find if the value exists, do not loop over every element.
  Approach:
  Take the middle item and compare it to the given value.
  Based on that comparison, narrow your search to a particular section of the array
*/

function binarySearch(sortedNums, searchNum) {
  // Base case
  if (sortedNums.length < 1) return false

  // Forward progress & Recursive call 
  var endIdx = sortedNums.length - 1
  var middleIdx = Math.floor((0 + endIdx) / 2)

  if (searchNum == sortedNums[middleIdx]) return true
  else if (searchNum < sortedNums[middleIdx]){
    sortedNums = sortedNums.slice(0, middleIdx)
    return binarySearch(sortedNums, searchNum)
  }
  else {
    sortedNums = sortedNums.slice(middleIdx+1, sortedNums.length-1)
    return binarySearch(sortedNums,searchNum)
  }
}

const nums1 = [1, 3, 5, 6];
const searchNum1 = 4;
const expected1 = false;

const nums2 = [4, 5, 6, 8, 12];
const searchNum2 = 5;
const expected2 = true;

const nums3 = [3, 4, 6, 8, 12];
const searchNum3 = 3;
const expected3 = true;
