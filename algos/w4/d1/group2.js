/* 
  Recursively sum an arr of ints
*/

const nums1 = [1, 2, 3];
const expected1 = 6;

function sumArr(nums, sum = 0) {
  // BASE CASE
  if (nums.length == 0) return sum;
  // RECURSIVE CALL
  // pop out the first num in nums: nums.slice(1)
  return sumArr(nums.slice(1), (sum += nums[0]));
}

function sumArr(nums, sum = 0) {
  return (nums.length == 0) ? sum : sumArr(nums.slice(1), sum += nums[0])
}

function sumArr(nums){
  return nums.length<2? nums[0] : nums[0]+sumArr(nums.slice(1,nums.length))
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
  num = parseInt(num)
  return num < 1? 0: num + recursiveSigma(num-1)
}

function recursiveSigma(num, sum = Math.floor(num)) {
  // base case:
  num = parseInt(num)
  if (num < 0) return 0
  if (num == 0) return sum

  // recursion
  return recursiveSigma(num -= 1, sum += num)
}