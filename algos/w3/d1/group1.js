/* 
  Balance Point
  Write a function that returns whether the given
  array has a balance point BETWEEN indices, 
  where one side’s sum is equal to the other’s. 
*/

function balancePoint(nums) {
  var sum_left = 0
  var sum_right = 0
  for (var j = 1; j < nums.length; j++){
      sum_left += nums[j-1]
      for (var i = j ; i < nums.length; i++){
          sum_right += nums[i]
          }
      if (sum_right - sum_left == 0){
          return true
      }
      else {
          sum_right = 0
      }
  }
  return false
}

function balancePoint(nums) {
  var sum_left = 0
  var sum_right = 0
  for (var i = 0; i < nums.length; i++){
      for (var k = i; k >= 0; k--){
          sum_left += nums[k]
      }
      for (var j = i + 1; j < nums.length; j++){
          sum_right += nums[j]
      }
      if (sum_left == sum_right) {
          return true
      } 
      else {
          sum_left = 0
          sum_right = 0
      }
  }
  return false
}

const nums1 = [1, 2, 3, 4, 10];
const expected1 = true;
// Explanation: between indices 3 & 4

const nums2 = [1, 2, 4, 2, 1];
const expected2 = false;

/*****************************************************************************/

/* 
  Balance Index
  Here, a balance point is ON an index, not between indices.
  Return the balance index where sums are equal on either side
  (exclude its own value).
  
  Return -1 if none exist.
*/

function balanceIndex(nums) {
  var sum_left = 0
  var sum_right = 0
  for (var j = 0; j < nums.length; j++){
      sum_left += nums[j]
      for (var i = j ; i < nums.length; i++){
          sum_right += nums[i]
          }
      if (sum_right - sum_left == 0){
          return j
      }
      else {
          sum_right = 0
      }
  }
  return -1
}

const nums1 = [-2, 5, 7, 0, 3];
const expected1 = 2;

const nums2 = [9, 9];
const expected2 = -1;

