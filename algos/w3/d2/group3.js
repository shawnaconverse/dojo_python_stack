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
  let startI = 0;
  let endI = sortedNums.length - 1;
  
  while( startI < endI){
    let middleI = Math.floor((startI +endI) / 2);
    if (sortedNums[middleI] == searchNum) {
      return true;
    } else if (sortedNums[middleI] > searchNum) {
      endI = middleI - 1;
    } else {
      startI = middleI + 1;
    }
  }
  return false;
}


