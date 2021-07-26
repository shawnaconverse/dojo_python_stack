/* 
  Recursively sum an arr of ints
*/

const nums21 = [1, 2, 3];
const expected1 = 6;

function sumArr(nums) {
// BASE CASE
if (nums.length < 2) return nums[0]; // Base case for the recursion 
// FORWARD PROGRESS
// RECURSIVE CALL

num = nums[0];
newArray = nums.slice(1, nums.length)

return num + sumArr(newArray); //Recursion
}

console.log(sumArr(nums21))  

  

/*****************************************************************************/

/* 
  Recursive Sigma
  Input: integer
  Output: sum of integers from 1 to Input integer
*/

const num18 = 5;
const expected1 = 15;
// Explanation: (1+2+3+4+5)

const num19 = 2.5;
const expected2 = 3;
// Explanation: (1+2)

const num20 = -1;
const expected3 = 0;

function recursiveSigma(num) { // A two-liner!
  if(num <1)return 0;
  
  //if(num == 1) return 1;   //dont need but saves one recursive step on non decimal inputs
  //new_num = num-1;

  return Math.floor(num+recursiveSigma(--num));
  //return (parseInt(num) && num>0 ? Math.floor(num+recursiveSigma(--num)): 0);           //one liner, 

}



