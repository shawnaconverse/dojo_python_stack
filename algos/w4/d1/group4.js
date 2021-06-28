// multiply this elemnts in an arr of nums and return the product
function multArr(nums) {
  // BASE CASE
  if (nums.length < 1) return 1;
  // FORWARD PROGRESS
  // RECURSIVE CALL
  return nums[0] * multArr(nums.slice(1, nums.length));
}

console.log(multArr([1, 2, 3, 4]));

/* 
  Recursively sum an arr of ints


/* 
  Recursively sum an arr of ints
*/

const nums1 = [1, 2, 3];
const expected1 = 6;

function sumArr(nums) {
  if (nums.length < 1) return 0;

  return nums[0] + sumArr(nums.slice(1, nums.length));
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

function recursiveSigma(prenum) {
  var newNum = 0
  var num = Math.floor(prenum)
  if (num <= 0){
      return 0
  }
  return newNum += num + recursiveSigma(num-1)
}

console.log(recursiveSigma(num3))



function recursiveSigma(num) {

  if (num < 1 ) return 0;

  return Math.floor(num) + recursiveSigma(math.floor(num)-1);
}