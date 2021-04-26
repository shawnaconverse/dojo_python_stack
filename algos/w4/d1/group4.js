/* 
  Recursively sum an arr of ints
*/

const nums1 = [1, 2, 3];
const expected1 = 6;

function sumArr(nums) {
  if (nums.length<1) return 0;

  newArr= nums.slice(1, nums.length)

  return nums[0] + sumArr(newArr)
}
console.log(sumArr(nums1))
/*****************************************************************************/

/* 
  Recursive Sigma
  Input: integer
  Output: sum of integers fr om 1 to Input integer
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

  if (num<=0) return 0;

  sum = Math.floor(num)

  return sum + recursiveSigma(num-1)
  
}

console.log(recursiveSigma(num1))
console.log(recursiveSigma(num2))
console.log(recursiveSigma(num3))
