/* 
  Balance Point
  Write a function that returns whether the given
  array has a balance point BETWEEN indices, 
  where one side’s sum is equal to the other’s. 
*/

const nums1 = [1, 2, 3, 4, 10];
const expected1 = true;
// Explanation: between indices 3 & 4

const nums2 = [1, 2, 4, 2, 1];
const expected2 = false;

/*
function balancePoint(nums) {
  let leftVal = 0;
  let rightVal = 0;

  for (let i = 0; i < nums.length; i++){
    leftVal += nums[i]

    for (let y = i + 1; y < nums.length; y++){
      rightVal += nums[y]
    }

    if (leftVal == rightVal){
      return true;
    }
    else{
      rightVal = 0;
    }
  }

  return false;
}*/

function balancePoint(nums){
    
  let rightSum = 0;
  let leftSum = 0;
  for (let i = 0; i < nums.length; i++) {
      rightSum += nums[i];
  }
  for (let j = 0; j < nums.length; j++) {
      leftSum += nums[j];
      rightSum -= nums[j];
      if (leftSum === rightSum) {
      return true;
      }
      
  }
  return false;
}
/*****************************************************************************/

/* 
  Balance Index
  Here, a balance point is ON an index, not between indices.
  Return the balance index where sums are equal on either side
  (exclude its own value).
  
  Return -1 if none exist.
*/

const nums1 = [-2, 5, 7, 0, 3];
const expected1 = 2;

const nums2 = [9, 9];
const expected2 = -1;

/*
function balanceIndex(nums) {
  if (nums.length < 3) return -1;

  let leftVal = nums[0]
  let rightVal = 0

  for (let i = 1; i < nums.length - 1; i++){
    
    for (let y = i + 1; y < nums.length; y++){
      rightVal += nums[y]
    }

    if (leftVal == rightVal){
      return i;
    }

    rightVal = 0;
    leftVal += nums[i]
  }

  return -1;
}*/


function balanceIndex(nums){
  if (nums.length < 3) return -1;
    
  let rightSum = 0;
  let leftSum = 0;
  for (let i = 0; i < nums.length; i++) {
      rightSum += nums[i];
  }
  for (let j = 0; j < nums.length; j++) {
      rightSum -= nums[j];
      if (leftSum === rightSum) {
      return j;
      }
      leftSum += nums[j];
  }
  return -1;
}


console.log(balanceIndex(nums1));