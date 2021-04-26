/* 
  Recursively sum an arr of ints
*/

const nums1 = [1, 2, 3];
const expected1 = 6;

const nums2 = []
const nums3 = [1]
const nums4 = [1,2]

function sumArr(nums) {
  //EDGE CASE
  if (nums.length < 1) return 0
  //WORK
  let sumNums = nums.pop()
  //RESULT
  // add each value as you go down through the arr
  return sumNums + sumArr(nums)
}
console.log(sumArr(nums1))
console.log(sumArr(nums2))
console.log(sumArr(nums3))
console.log(sumArr(nums4))
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

const num4 = -10;

function recursiveSigma(num) {
  //EDGE CASE
  if (num < 1) return 0
  //SETUP
  //set the num to a round number.
  num = Math.floor(num)
  //WORK
  //count up to the specified num and add all values one after the next
  return num + recursiveSigma(num - 1)

}

console.log(recursiveSigma(num1))
console.log(recursiveSigma(num2))
console.log(recursiveSigma(num3))
console.log(recursiveSigma(num4))
