function multiplyArrNonRecursive(nums) {
  value = 1;
  for (const num of nums) {
    value *= num;
  }
  return value
}

function multiplyArr(nums) {
  // EDGE CASE / BASE CASE
  if (nums.length < 1) return 1;
  // BASE CASE - exit point for the recursion
  // if (nums.length == 1) return nums[0];
  // FORWARD PROGRESS
  // RECURSIVE CALL
  return nums[0] * multiplyArr(nums.slice(1, nums.length))
}

/* 
  Recursively sum an arr of ints
*/

const nums1 = [1, 2, 3];
const expected1 = 6;

function sumArr(nums) {
  if (nums.length < 1) return 0
  if (nums.length == 1) return nums[0];
  return nums[0] + sumArr(nums.slice(1, nums.length))
}

/*****************************************************************************/

/* 
  Recursive Sigma
  Input: integer
  Output: sum of integers from 1 to Input integer
*/

const num1 = 5;
const expected1 = 15;
// Explanation: (1+2+3+4+5)

const num2 = 2.5;
const expected2 = 3;
// Explanation: (1+2)

const num3 = -1;
const expected3 = 0;

function recursiveSigma(num) {
  let nums = Math.floor(num)
  if (nums <= 0) return 0
  var minus = nums - 1;

  return nums + recursiveSigma(minus)
}
