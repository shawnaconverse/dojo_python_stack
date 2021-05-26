/*
  Recursive Binary Search
  Input: SORTED array of ints, int value
  Output: bool representing if value is found
  Recursively search to find if the value exists, do not loop over every element.
  Approach:
  Take the middle item and compare it to the given value.
  Based on that comparison, narrow your search to a particular section of the array
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

function binarySearch(sortedNums, SearchNum){
  let start = 0;
  let end = sortedNums.length - 1;

  while (start <= end){
    let mid = Math.floor((start + end) / 2);
    if (sortedNums[mid] === SearchNum){
      return true;
      
    } else if (sortedNums[mid] < SearchNum){
      start = mid + 1;

    } else {
      end = mid - 1;
    }
  }
  return false;
}
console.log(binarySearch(nums3, 3))



function binarySearch2(sortedNums, searchNum) {
  let mid = Math.floor(sortedNums.length / 2);
  if (sortedNums.length === 1 && sortedNums[0] != searchNum) {
    return false;
  }
  if (searchNum === sortedNums[mid]) {
    return true;
  } else if (searchNum < sortedNums[mid]) {
    return binarySearch2(sortedNums.slice(0, mid),searchNum);
  } else if (searchNum > sortedNums[mid]) {
    return binarySearch2(sortedNums.slice(mid), searchNum);
  }
}
console.log(binarySearch2(nums3, searchNum3))

