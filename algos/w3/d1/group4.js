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

  let leftSum = 0
  let rightSum = 0

  for (let j = 0; j < nums.length; j++){
      rightSum += nums[j]
  }

  for (let i = 0; i < nums.length; i++){
      leftSum += nums[i];
      rightSum -= nums[i];

      if (leftSum == rightSum) return true;

  }
  return false
}
console.log(balancePoint(nums1));

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
  if (nums.length < 3) return -1;

  let leftSum = 0;
  let rightSum = 0;

  for (let j = 0; j < nums.length; j++){
      rightSum += nums[j];
  }

  rightSum -= nums[0];

  for (let i = 1; i < nums.length; i++){
      leftSum += nums[i-1];
      rightSum -= nums[i];

      if (leftSum == rightSum) return i
  }
  return -1
}

console.log(balanceIndex(nums1))
