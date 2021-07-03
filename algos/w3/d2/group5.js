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
// lets divide the length by two
// odd length loop, even length loop
// odd length loop --> 
function binarySearch(sortedNums, searchNum) {
  var len = Math.floor(sortedNums.length/2);
  for (var i=len; i<sortedNums.length;i++) {
    if (sortedNums[i]==searchNum) {
      return true;
    }
    else {
      if (sortedNums[i]<searchNum) {
        len = Math.floor(len/2);
      } else {
        len = len + Math.ceil(len/2);
      }
    }
  }
  return false;
}

console.log(binarySearch(nums1,searchNum1));
console.log(binarySearch(nums2,searchNum2));
console.log(binarySearch(nums3,searchNum3));






function binarySearch(arr, expect){
  var start = 0;
  var end = arr.length-1
  while (start <= end){
    var middle = Math.floor((start + end) / 2)
    if (expect == arr[middle]){
      return true;
    }
    else if (expect > arr[middle]){
      start = middle + 1;
    }
    else {
      end = middle - 1;
    }
  }
  return false
}