/* 
  Balance Point
  Write a function that returns whether the given
  array has a balance point BETWEEN indices, 
  where one side’s sum is equal to the other’s. 
*/

const nums1 = [1, 2, 3, 4, 10];
const expected1 = true;
// Explanation: between indices 3 & 4

const nums2 = [1, 2, 4, 2, 1];
const expected2 = false;

function balancePoint(nums) {

  var backary = [];
  var forwardary = [];
  for(var i = 1; i < nums.length; i++){
      var backsum = 0;
      var forwardsum = 0;
      backary = nums.slice(0,i)
      forwardary = nums.slice(i,nums.length)
      for(var x = 0; x < backary.length; x++){
          backsum+=backary[x]

      }
      for(var y = 0; y < forwardary.length; y++){
          forwardsum+=forwardary[y]

      }
      if(backsum == forwardsum){
          return true;
      }
  }
  return false
}


/*****************************************************************************/

/* 
  Balance Index
  Here, a balance point is ON an index, not between indices.
  Return the balance index where sums are equal on either side
  (exclude its own value).
  
  Return -1 if none exist.
*/

const nums1 = [-2, 5, 7, 0, 3];
const expected1 = 2;

const nums2 = [9, 9];
const expected2 = -1;

function balanceIndex(nums) {
  if(nums.length < 3) return -1;

  var backary = [];
  var forwardary = [];
  for(var i = 1; i < nums.length; i++){
      var backsum = 0;
      var forwardsum = 0;
      backary = nums.slice(0,i)
      forwardary = nums.slice(i+1,nums.length)
      for(var x = 0; x < backary.length; x++){
          backsum+=backary[x]

      }
      for(var y = 0; y < forwardary.length; y++){
          forwardsum+=forwardary[y]

      }
      if(backsum == forwardsum){
          return i;
      }
  }
  return -1
}
