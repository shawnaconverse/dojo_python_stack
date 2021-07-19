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

const nums3 = [7, 3, 10, 18 ,2]
const expected3 = true;

function balancePoint(nums) {
  // fixing the length
  // nums.length calculates the length each time
  // what if out algo changes the length of num
  const len = nums.length;

  if (len < 2) {
    return false;
  }

  let leftSum = nums[0];
  let rightSum = 0;

  for (let i = 1; i < len; i++) {
    rightSum += nums[i];
  }

  for (let i = 1; i < len; i++) {
    if (leftSum === rightSum) return true;

    rightSum -= nums[i];
    leftSum += nums[i];
  }

  return false;
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
  // fixing the length
  // nums.length calculates the length each time
  // what if out algo changes the length of num
  const len = nums.length;

  if (len < 3) {
    return false;
  }

  let leftSum = nums[0];
  let rightSum = 0;

  for (let i = 1; i < len; i++) {
    rightSum += nums[i];
  }

  for (let i = 1; i < len - 1; i++) {
    if (leftSum === rightSum) return i;

    rightSum -= nums[i + 1];
    leftSum += nums[i];
  }

  return -1;
}
