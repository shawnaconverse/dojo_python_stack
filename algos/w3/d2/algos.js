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
  if (searchNum < sortedNums[0]) return false;
  if (searchNum > sortedNums[sortedNums.length - 1]) return false;

  var idx = Math.floor(sortedNums.length / 2);
  var found = false;

  while (!found) {
    if (sortedNums[idx] === searchNum) {
      found = true;
      break;
    }

    // BASE CASE
    if (sortedNums.length < 2) break;

    // WORK
    // if searchNum is smaller, go to the left
    if (sortedNums[idx] > searchNum) {
      sortedNums = sortedNums.slice(0, idx);
      idx = Math.floor(sortedNums.length / 2);
    }

    // if searchNum is bigger, go to the right
    if (sortedNums[idx] < searchNum) {
      sortedNums = sortedNums.slice(idx + 1, sortedNums.length);
      idx = Math.floor(sortedNums.length / 2);
    }
  }

  return found;
}
