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
  var start = 0;
  var end = sortedNums.length - 1;

  if (start > end) return false;

  var midIdx = Math.floor(sortedNums.length / 2);

  if (sortedNums[midIdx] === searchNum) return true;

  if (sortedNums[midIdx] > searchNum) {
    var newArr = sortedNums.slice(start, midIdx);
    return binarySearch(newArr, searchNum);
  } else if (sortedNums[midIdx] < searchNum) {
    var newArr = sortedNums.slice(midIdx + 1, sortedNums.length);
    return binarySearch(newArr, searchNum);
  } else {
    return midIdx;
  }
}
