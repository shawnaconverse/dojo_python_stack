/* 
  Array: Binary Search (non recursive)
  Given a sorted array and a value, return whether the array contains that value.
  Do not sequentially iterate the array. Instead, ‘divide and conquer’,
  taking advantage of the fact that the array is sorted .
*/

const nums1 = [1, 3, 5, 6];
//const searchNum1 = 4;
//const expected1 = false;

const nums2 = [4, 5, 6, 8, 12];
//const searchNum2 = 5;
//const expected2 = true;

const nums3 = [3, 4, 6, 8, 12];
//const searchNum3 = 3;
//const expected3 = true;

function binarySearch(sortedNums, searchNum) {
  let middle = 0
  let ctr = 0

  while (ctr < sortedNums.length) {
    middle = Math.ceil(sortedNums.length/2)
    console.log(sortedNums[middle])

    if (sortedNums[middle] == searchNum) {
      return true
      break
    }
    
    if (sortedNums[middle] < middle) {
      sortedNums = sortedNums.slice(middle, sortedNums.length)
      console.log(sortedNums)
      middle = Math.ceil(sortedNums.length/2)
      ctr = middle
      console.log(ctr)
    } 
    
    if (sortedNums[middle] > middle) {
      sortedNums = sortedNums.slice(ctr, middle)
      middle = Math.ceil(sortedNums.length/2)
      ctr = middle
      console.log(sortedNums)
    }
    return false
  }
}

binarySearch(nums1, 4)
binarySearch(nums2, 5)
binarySearch(nums3, 3)
