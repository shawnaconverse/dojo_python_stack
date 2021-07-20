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

  while(true){
    if(sortedNums.length <1) return false
    if(sortedNums.length ==1 && sortedNums[0] != searchNum) return false
    mid = parseInt(sortedNums.length/2)
    if(sortedNums[mid] == searchNum)
      return true;
    if(sortedNums[mid]>searchNum){
      sortedNums = sortedNums.slice(0,mid)
    }
    else{
      sortedNums = sortedNums.slice(mid+1)
    }
  }
}
