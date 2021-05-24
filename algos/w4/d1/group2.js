/* 
  Recursively sum an arr of ints
*/

const nums1 = [1, 2, 3];
// const expected1 = 6;

function sumArr(nums) {
  if (nums.length < 1) return 1;

  return nums[0] + sumArr(nums.slice(1, nums.length))

}

function sumArr(nums){
  if (nums <= 0) return 0;
  return nums[0] + sumArr(nums.slice(1, nums.length))
}


sumArr(nums1)

/*****************************************************************************/

/* 
  Recursive Sigma
  Input: integer
  Output: sum of integers from 1 to Input integer
*/

const num1 = 5;
// const expected1 = 15;
// Explanation: (1+2+3+4+5)

// const num2 = 2.5;
// const expected2 = 3;
// Explanation: (1+2)

// const num3 = -1;
// const expected3 = 0;

function recursiveSigma(num) {
  let max Math.floor()nium

  if (max <= 0) return 0;

  return max + recursiveSigma(--max)
}

recursiveSigma(num1)


#secondway
function recursiveSigma2(num) {
  num = Math.floor(num);
  if (num < 0) return 0;
  return num + recursiveSigma2(num - 1);
}

secondway(num1)









