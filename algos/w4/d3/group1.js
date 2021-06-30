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


function binarySearch(sortedNums, searchNum, startidx=0, endidx=sortedNums.length-1) {

    var mid = Math.floor((startidx+endidx)/2);

    if(searchNum==sortedNums[mid]){
      return true;
    }
    else if(startidx==endidx){
      return false;
    }
    else if(searchNum<sortedNums[mid]){
      return binarySearch(sortedNums,searchNum,startidx,mid-1)
    }
    else if(searchNum>sortedNums[mid]){
      return binarySearch(sortedNums,searchNum,mid+1,endidx)
    }
    
}

