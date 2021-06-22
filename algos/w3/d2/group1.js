/* 
  Array: Binary Search (non recursive)
  Given a sorted array and a value, return whether the array contains that value.
  Do not sequentially iterate the array. Instead, ‘divide and conquer’,
  taking advantage of the fact that the array is sorted .
*/

// loop
    // is the current index the search num?
    // is the search num less than the current index?
    // is the search num greater than the current index?

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
  let len = sortedNums.length;
  let index = Math.floor(sortedNums.length/2);
  while(sortedNums[index] != searchNum){
    if (index === len-2) {
      index++;
      break;
    }
    if (searchNum < sortedNums[index]){
      index = Math.floor(index/2);
    }
    else{
      index = Math.floor((len-index)/2)+index;
    }
  }
  return sortedNums[index] === searchNum;
}


// Setting outside variables to keep track of length and index
// Start off index at middle number and check to see if target value
// If statement checking to see if target value is greater than or equal to current index
// If less than, we select first half and choose next middle index,
// Opposite if greater than
// 