/* 
  Recursively sum an arr of ints
*/

const nums1 = [1, 2, 3];
const expected1 = 6;

function sumArr(nums) {
  if (nums.length < 2) return nums[0];

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
  let floorNum = Math.floor(num);
  if (floorNum <= 0) return 0;
  return floorNum + recursiveSigma(floorNum - 1)
}
