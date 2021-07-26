             /* 
  Recursively sum an arr of ints
*/

const nums1 = [1, 2, 3];
const expected1 = 6;

function sumArr(nums) {    if (arr.length < 2) return arr[0];
  // FORWARD PROGRESS
  // RECURSIVE CALL

  num = nums[0] // first thing in the arr
  newArr = nums.slice(1, nums.length) // grabbing everything else

  return num + sumArr(newArr)
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
  newArr = []
  if (num < 1) return num[0];

  newNum = num[0]

  newArr.push(Math.floor(num[0]))


  return num + recursiveSigma(num[0] -=  1)




}

function recursiveSigma(num) {
  // BASE CASE
  if (num == 1){
    return num;
  }
  else if (!Number.isInteger(num)){ //This is the condition to prevent decimal places
    num = Math.floor(num)
  }
  else if (num <= 0){ //This condition is to prevent any negative numbers
    return 0;
  }

  // FORWARD PROGRESS
  let start = num;
  let newNum = num - 1; 

  // RECURSIVE CALL
  return start + recursiveSigma(newNum);
}

console.log(recursiveSigma(numBot1));
console.log(recursiveSigma(numBot2));
console.log(recursiveSigma(numBot3));


// function recursiveSigma(num) {
//   let i  = Math.floor(num)
//   if( i <= 1)
//   return i;
//   return i + recursiveSigma(i - 1);

          
// }
// console.log(recursiveSigma(num1))
// console.log(recursiveSigma(num2))
// console.log(recursiveSigma(num3))