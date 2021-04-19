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
  sum_left = 0;
  for(var i = 0; i < nums.length; i++){
    sum_right = 0;
    sum_left += nums[i];
    for(var j = nums.length-1; j>i; j--){
      sum_right += nums[j];
    }
    if (sum_left == sum_right){
      return true
    }
  }
  return false
}

console.log(balancePoint(nums1))
console.log(balancePoint(nums2))

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
  if(nums.length < 3){
    return -1;
  }
  for(var i = 0; i < nums.length; i++){
    sum_left = 0;
    sum_right = 0;
    for(var j = 0; j < i; j++){
      sum_left += nums[j];
    }
    for(var k = nums.length-1; k>i; k--){
      sum_right += nums[k];
    }
    if(sum_left == sum_right){
      return i
    }
  }
  return -1
}

console.log(balanceIndex(nums1))
console.log(balanceIndex(nums2))
console.log(balanceIndex([1,4,6,2,3]))

