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
  if (searchNum > sortedNums[sortedNums.length - 1]) return false;

  if (searchNum < sortedNums[0]) return false;

  let halfNum = Math.floor(sortedNums.length/2)
  let count = halfNum;
  if (sortedNums[halfNum] > searchNum){
      while (count != 0) {
          if (sortedNums[count] == searchNum){
              return true;
          }
          count--;
      }
  }
  if (sortedNums[halfNum] > searchNum){
      while (count != sortedNums.length){
          if (sortedNums[count] == searchNum){
              return true;
          }
          count++;
      }
  }

  return false;
}


// function binarySearch2 (sortedNums, searchNum){
//   let found = sortedNums.find(element => element == searchNum)
//     console.log(found)
//   return true
// }

// binarySearch2(nums2, searchNum2)


