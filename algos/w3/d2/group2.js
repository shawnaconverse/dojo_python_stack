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
  for (let i = 0; i = sortedNums.length/2; i++){
    if (sortedNums[i] == searchNum){
      return true
    }
    else if (sortedNums[i] > searchNum){
      // iterate to the left (lower numbers)
      for (let i = 0; i = sortedNums.length/2; i--){
        console.log("this is" + "error 1")
        if (j == searchNum){
          return true
        }
      }
    }
    else if (sortedNums[i] < searchNum){
      // iterate to larger numbers
      for (let i =0 ; i = sortedNums.length/2; i++){
        console.log("this is" + "error 2")
        if (j == searchNum){
          return true
        }

      }
    }
    else return false
  }
}

function binarySearch(sortedNums, searchNum) {
  for(var i = sortedNums.length/2; i<sortedNums.length; i+0){
    if(sortedNums[i] == searchNum){
      return true
    }
    else if(sortedNums[i] < searchNum){
      i = Math.floor(i/2)
      console.log(i)
    }
    else if(sortedNums[i] > searchNum){
      i = i + Math.floor(i/2)
      console.log(i)
    }
  }
  return false
}
binarySearch(nums1, searchNum1)