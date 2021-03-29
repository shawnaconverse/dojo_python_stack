// Recursion is where a function calls itself directly
function hello(nums) {
  // Base Case
  if (nums.length == 1) {
    return nums[0];
  }
  // Forward Progress
  num = nums[0]; // grabbing the first thing in the array => 1
  otherNums = nums.slice(1); // separating out the rest of the array => [2, 3]
  // Return / recursive call
  return num * hello(otherNums);
}

function hello2(nums) {
  // Base Case
  if (nums.length == 1) {
    return nums[0];
  }
  // Forward progress and recursive call
  return nums[0] * hello2(nums.slice(1));
}

console.log(hello(nums1));
/*
      Recursively sum an arr of ints
  */

const nums1 = [1, 2, 3];
const expected1 = 6;

function sumArr(nums) {}

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
  if (nums == 1) {
    return nums[0];
  }
}
