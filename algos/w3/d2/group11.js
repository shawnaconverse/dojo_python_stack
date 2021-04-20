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

//store index, store upper limit index, store lower limit index
//divide arr.length/2
//start at that index
//check if value is our value
//if no, check if array can be divided again
//if no, return false
// if yes, check if value is higher or lower
//if higher, set minimum index to current index, if lower, set max
//divide min over max for new index


function binarySearch(sortedNums, searchNum) {
  let upperLimit = sortedNums.length - 1
  let lowerLimit = 0
  while (upperLimit-lowerLimit != 1){
    let index = Math.floor((upperLimit-lowerLimit)/2 + lowerLimit)
    console.log(upperLimit)
    console.log(lowerLimit)
    if (sortedNums[index] === searchNum){
      return true
    }
    else{
      if (searchNum > sortedNums[index]){
        lowerLimit = index
      } else{
        uppperLimit = index
      }
    }
  }
  return false
}

console.log(binarySearch(nums1))
console.log(binarySearch(nums2))
console.log(binarySearch(nums3))
