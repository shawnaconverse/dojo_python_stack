/* 
  Array: Binary Search (non recursive)
  Given a sorted array and a value, return whether the array contains that value.
  Do not sequentially iterate the array. Instead, ‘divide and conquer’,
  taking advantage of the fact that the array is sorted .
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
  // var found = false;
  var idx = Math.floor(sortedNums.length / 2);

  while (true) {
    if (sortedNums[idx] === searchNum) {
      return true;
    }

    // BASE CASE
    if (sortedNums.length < 2) return false;

    if (sortedNums[idx] > searchNum) {
      sortedNums = sortedNums.slice(0, idx);
      idx = Math.floor(sortedNums.length / 2);
    }

    if (sortedNums[idx] < searchNum) {
      sortedNums = sortedNums.slice(idx + 1, sortedNums.length);
      idx = Math.floor(sortedNums.length / 2);
    }
  }

  // return found;
}
