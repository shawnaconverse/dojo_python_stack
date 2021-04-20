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
  if(searchNum > sortedNums[Math.floor(sortedNums.length/2)]){
    for(var i = Math.floor(sortedNums.length/2); i < sortedNums.length; i++){
      if(sortedNums[i] == searchNum){
        return true
      }
    }
    return false;
  }else{
    if(searchNum < sortedNums[Math.floor(sortedNums.length/2)]){
        // console.log(sortedNums[Math.floor(sortedNums.length/2)])
        // console.log(Math.floor(sortedNums.length/2))
      for(var i = 0; i <= Math.floor(sortedNums.length/2); i++){
        if(sortedNums[i] == searchNum){
          return true
        }
      }
      return false;
  }
}
}

console.log(binarySearch(nums1, searchNum1))
console.log(binarySearch(nums2, searchNum2))
console.log(binarySearch(nums3, searchNum3))