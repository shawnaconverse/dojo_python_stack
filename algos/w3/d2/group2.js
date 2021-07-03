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
  var mid = Math.floor(sortedNums.length/2);
  var idx2 = sortedNums.length;
  var idx1 = 0;
  while(mid != idx1 || mid != idx2){
      if(searchNum==sortedNums[mid]){
        return true;
      }
      if(searchNum<sortedNums[mid]){
          idx2 = mid;
          mid = Math.floor((idx2+idx1)/2)
      }
      else if(searchNum>sortedNums[mid]){
        idx1 = mid+1;
        mid = Math.floor((idx2+idx1)/2)
      }

  }
  return false;
}


function binarySearch(sortedNums, searchNum) {
  let mid=Math.floor((sortedNums.length)/2);
  let start=0;
  let end=sortedNums.length;
  while(mid!=start || mid!=end){
      if(searchNum==sortedNums[mid]){
          return true
      } else if(searchNum<sortedNums[mid]){
          end=mid;
      } else {
          start=mid+1;
      }
      mid=Math.floor((start+end)/2);
  }
  return false
}