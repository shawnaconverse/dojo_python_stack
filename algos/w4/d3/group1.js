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

function binarySearch(sortedNums, searchNum) {
  

}



/*
function binarySearch(sortedNums, searchNum) {
    let start_index = 0;
    let end_index = sortedNums.length - 1;
    let middle_index = Math.floor((start_index + end_index)/2)
    console.log(sortedNums)

    if (start_index > end_index || sortedNums.length < 1) return false;

    if (sortedNums[middle_index] == searchNum){
        return true;
    }

    else if (sortedNums[middle_index] > searchNum){
        newNums = sortedNums.slice(0, middle_index)
    }

    else if (sortedNums[middle_index] < searchNum){
        newNums = sortedNums.slice(middle_index + 1)
    }

    return binarySearch(newNums, searchNum)
}
*/


// --------
function binarySearch(sortedNums, searchNum) {
  let left = 0,
    right = sortedNums.length - 1;
  // base case
  if (left > right) return false;

  let midIdx = Math.floor((left + right) / 2);
  // if find searchNum, return true
  // if searchNum in the left part, search left part
  // if searchNum in the right part, search right part
  if (sortedNums[midIdx] === searchNum) {
    return true;
  } else if (searchNum < sortedNums[midIdx]) {
    return binarySearch(sortedNums.slice(0, midIdx), searchNum);
  } else {
    return binarySearch(sortedNums.slice(midIdx + 1), searchNum);
  }
}

function binarySearch(sortedNums,searchNum){
  // console.log(sortedNums)
  if(sortedNums.length <1) return false
  if(sortedNums.length ==1 && sortedNums[0] != searchNum) return false
  let mid = parseInt(sortedNums.length/2)
  // console.log('aaaa',sortedNums[mid])
  if(sortedNums[mid] == searchNum) return true;
  return sortedNums[mid] > searchNum? binarySearch(sortedNums.slice(0,mid),searchNum) : binarySearch(sortedNums.slice(mid+1),searchNum)

}