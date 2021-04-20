/* 
  Array: Binary Search (non recursive)
  Given a sorted array and a value, return whether the array contains that value.
  Do not sequentially iterate the array. Instead, ‘divide and conquer’,
  taking advantage of the fact that the array is sorted .
*/

function binarySearch(sortedNums, searchNum) {
  var start = 0
  var end = sortedNums.length -1 

  while (start <= end){
    var middle = (start + end)/2
    if (sortedNums[middle] == searchNum) return true
    else if (sortedNums[middle] > searchNum){
      end = middle - 1 
    }
    else{
      start = middle + 1
    }

  }
}

const nums1 = [1, 3, 5, 6];
const searchNum1 = 4;
const expected1 = false;

const nums2 = [4, 5, 6, 8, 12];
const searchNum2 = 5;
const expected2 = true;

const nums3 = [3, 4, 6, 8, 12];
const searchNum3 = 3;
const expected3 = true;

