/* 
  Recursively sum an arr of ints
*/

const nums1 = [1, 2, 3, 7];
const expected1 = 6;

function sumArr(nums) {
  let sum = 0
  if (nums.length-1 === 0){
    return nums;
  }
  for ( var i = 0; i < nums.length; i++){
    sum += nums[i]
  }
return sum
}
console.log(sumArr(nums1))

/*****************************************************************************/

/* 
  Recursive Sigma
  Input: integer
  Output: sum of integers from 1 to Input integer
*/

const num1 = 5;
const expected1 = 15;
// Explanation: (1+2+3+4+5)

const num2 = 2.6;
const expected2 = 3;
// Explanation: (1+2)

const num3 = -3;
const expected3 = 0;

function recursiveSigma(num) {
  let integerSum = 0
  // var num = Math.round(num) // this is the true round
  var num = Math.floor(num) // this is rounding down as shown in example
  if(num === 0){
    return 0
  }
  if(num < 0){
    return 0
  }
  while(num != 0){
    integerSum += num
    num -- 
  }
return integerSum
}
console.log(recursiveSigma(num1))
console.log(recursiveSigma(num2))
console.log(recursiveSigma(num3))

