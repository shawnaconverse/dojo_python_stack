/* 
  Recursively sum an arr of ints
*/

const nums1 = [1, 2, 3];
const expected1 = 6;

function sumArr(nums) {
  if (nums.length < 2) return nums[0];
  let star = nums[0];
  let newArr = nums.slice(1, nums.length);

  return stare +sumArr(newArr);
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
  if (num == 1){
     return num;
  }
  else if (Number.isInteger(num)){ // this prevents decimal places
    num = Math.floor(num)
  }
  else if (num <= 0){ // this prevents negative numbers
    return 0;
  }

  let start = num;
  let newNum = num -1;

  return start + recursiveSigma(newNum);
}

// function recursiveSigma(num) {
//   num = Math.floor(num)
//   if (num == 1)
//       return num;

//   if(num > 1)
//       return num + recursiveSigma(num - 1);

//   if(num < 1)
//       return num + recursiveSigma(num + 1);
  
// }
