function multArr(arr) {
  // BASE CASE
  if (arr.length < 2) return arr[0];
  // FORWARD PROGRESS
  // RECURSIVE CALL

  num = arr[0] // first thing in the arr
  newArr = arr.slice(1, arr.length) // grabbing everything else

  return num * multArr(newArr)
}


/* 
  Recursively sum an arr of ints
*/
const nums2 = [2, 5, 3, 7, 6]
const nums1 = [1, 2, 3];
const expected1 = 6;

function sumArr(nums) {
  // BASE CASE
  if (nums.length < 2) return nums[0];
  // FORWARD PROGRESS
  // RECURSIVE CALL

  num = nums[0] // first thing in the arr
  newArr = arr.slice(1, nums.length) // grabbing everything else

  return num + sumArr(newArr)
}
console.log(sumArr(nums2))
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
  // EDGE CASES + SETUP
  const n = parseInt(num); // convert floats to integers
  if (isNaN(n)) return null; // if the num was not a number, return null

  // BASE CASE
  if (n < 1) return 0;

  // FORWARD PROGRESS
  // RECURSIVE CALL
  return n + recursiveSigma(n - 1)
}
