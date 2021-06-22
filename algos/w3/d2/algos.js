/* 
  Array: Binary Search (non recursive)
  Given a sorted array and a value, return whether the array contains that value.
  Do not sequentially iterate the array. Instead, ‘divide and conquer’,
  taking advantage of the fact that the array is sorted .
*/

// if n is the number of elements
// then a normal search through an array would be n operations O(n)
// binary search is O(log(n)) this is much faster than O(n)

const nums1 = [1, 3, 5, 6];
const searchNum1 = 4;
const expected1 = false;

const nums2 = [4, 5, 6, 8, 12];
const searchNum2 = 5;
const expected2 = true;

const nums4 = [4, 5, 6, 8, 12];
const searchNum4 = 12;
const expected4 = true;

const nums3 = [3, 4, 6, 8, 12];
const searchNum3 = 2;
const expected3 = true;

// i wrote to mimic the recursive solution
function binarySearch(sortedNums, searchNum) {
  // loop
  // is the current index the search num?
  // is the search num less than the current index?
  // is the search num greater than the current index?
  let idx = Math.floor(sortedNums.length / 2);

  while (true) {
    idx = Math.floor(sortedNums.length / 2);
    if (sortedNums[idx] === searchNum) return true;

    // BASE CASE
    if (sortedNums.length < 2) return false;

    if (searchNum > sortedNums[idx]) {
      sortedNums = sortedNums.slice(idx + 1, sortedNums.length);
    }

    if (searchNum < sortedNums[idx]) {
      sortedNums = sortedNums.slice(0, idx);
    }
  }
}

function binarySearchUsingIndexs(sortedNums, searchNum) {
  let leftIdx = 0;
  let rightIdx = sortedNums.length - 1;

  while (leftIdx <= rightIdx) {
    let midIdx = Math.floor((rightIdx - leftIdx) / 2);

    if (sortedNums[midIdx] === searchNum) return true;

    if (searchNum < sortedNums[midIdx]) {
      rightIdx = midIdx - 1;
    } else {
      leftIdx = midIdx + 1;
    }
  }

  return false;
}

