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

  var i = Math.floor(sortedNums.length/2);
  var curentNum = sortedNums[i];

  while(searchNum != curentNum && sortedNums.length != 0){

    while(curentNum < searchNum) {
      sortedNums = sortedNums.slice(i+1,sortedNums.length);
      i = Math.floor(sortedNums.length/2);
      curentNum = sortedNums[i];
    }

    while(curentNum > searchNum) {
      sortedNums = sortedNums.slice(0,i);
      i = Math.floor(sortedNums.length/2);
      curentNum = sortedNums[i];
    }

  }
  return searchNum == curentNum;
}

console.log(binarySearch(nums1, searchNum1));
console.log(binarySearch(nums2, searchNum2));
console.log(binarySearch(nums3, searchNum3));