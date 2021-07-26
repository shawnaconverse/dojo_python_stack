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

const nums1 = [1, 2, 3];
const expected1 = 6;

function sumArr(nums) {
    // BASE CASE
    if (nums.length < 2){
        return nums[0];
    }
    // FORWARD PROGRESS
    num = nums[0];                                 
    newArr = nums.slice(1,nums.length);             
    // RECURSIVE CALL
    return num + sumArr(newArr);                    
}

console.log(sumArr(nums1));

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
    if (num < 1) return 0;    // exit condition
    return Math.floor(num)  + recursiveSigma(Math.floor(num) - 1); // return value plus result of recursive call
}

console.log(recursiveSigma(num2));