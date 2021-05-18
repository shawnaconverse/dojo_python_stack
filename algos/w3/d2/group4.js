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
  let start = 0;
  let end = sortedNums.length - 1;
  let middle = Math.floor((start + end) / 2);
  console.log("The middle is " + sortedNums[middle])

  while(start < end){
    if (searchNum === sortedNums[middle]){
        return true
        break;
    }
    else if (sortedNums[middle] > searchNum) {
      sortedNums = sortedNums.slice(middle);
      middle = Math.floor(sortedNums.length / 2);
    }
    else {
      sortedNums = sortedNums.slice(middle + 1, sortedNums.length);
      middle = Math.floor(sortedNums.length / 2);
    }
  }
}
console.log(binarySearch(nums1,4))






//   if (searchNum === middle) {
//     return true;
//   }
//   else if (searchNum > middle){
//     for (var i = middle; i <= end; i++){
//       if ([i] == searchNum){
//         return true
//       }
//       else{
//         return false
//       }
//     }
//   }
// }
// console.log(binarySearch())