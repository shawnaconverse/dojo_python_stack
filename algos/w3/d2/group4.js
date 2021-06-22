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
  let start = 0, end = arr.length-1;
  
  while(start <= end){
    let mid = Math.floor((start + end)/2)
    
    if (sortedNums[mid] === searchNum){
      return true;
    }
    else if (sortedNums[mid] < searchNum){
      start = mid + 1;
    }
    else{
      end = mid - 1;
    }
  }
  return false;
}