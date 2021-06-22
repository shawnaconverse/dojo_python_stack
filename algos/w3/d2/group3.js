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

const nums4 = [1, 2, 3, 4, 6, 8, 10, 11, 19];
const searchNum4 = 19;
const expected = true;

function binarySearch(sortedNums, searchNum) {
  if(sortedNums[Math.floor(sortedNums.length/2)] == searchNum) {
    return true;
  } else if(searchNum > sortedNums[Math.floor(sortedNums.length/2)]) {
    for(let i = Math.floor(sortedNums.length/2); i < sortedNums.length; i++)  {
      if (sortedNums[i] == searchNum) {
        return true;
      }
    }
  } else  {
    for(let i = Math.floor(sortedNums.length/2); i >= 0; i--)  {
      if (sortedNums[i] == searchNum) {
        return true;
      }
    }
  }
  return false;
}

function binarySearch(sortedNums, searchNum)  {
  let index = Math.floor(sortedNums/2)
  while(true) {
    if(sortedNums[index] == searchNum)  {
      
    }
  }
}

