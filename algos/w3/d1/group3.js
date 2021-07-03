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

function balancePoint(nums) {
  let frontSum = 0; // Tracking sum of the left side of the array
  let backSum = 0; // Tracking sum of the right side of the array
  
  if (nums.length <= 1) {
    return false;
  }
  
  frontSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    frontSum += nums[i];
    backSum = 0;
    for (let j = i+1; j < nums.length; j++) {
      backSum += nums[j]; // Summing the right side of the array
    }
    if (frontSum === backSum) {
      return true;
    }
  }

  return false;
}


function balancePoint(nums) {
  let backSum=0;
  let i=0;
  while(i<nums.length){
      backSum+=nums[i];
      i++;
  }
  let j=0;
  let frontSum=0;
  while(j<nums.length){
      frontSum+=nums[j]
      backSum-=nums[j]
      if(frontSum==backSum){
          return true;
      }
      j++;
  }
  return false;
}

console.log(balancePoint(nums1))
console.log(balancePoint(nums2))

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

function balanceIndex(nums) {
  let frontSum = 0; // Tracking sum of the left side of the array
  let backSum = 0; // Tracking sum of the right side of the array
  
  if (nums.length <= 2) {
    return -1;
  }

  for (let i = 1; i < nums.length; i++) {
    frontSum += nums[i-1];
    backSum = 0;
    for (let j = i+1; j < nums.length; j++) {
      backSum += nums[j]; // Summing the right side of the array
    }
    if (frontSum === backSum) {
      return i;
    }
  }

  return -1;
}

function balanceIndex(nums) {
  let backSum=0;
  let i=2;
  while(i<nums.length){
      backSum+=nums[i];
      i++;
  }
  let j=1;
  let frontSum=0;
  while(j<nums.length-1){
      frontSum+=nums[j-1]
      backSum-=nums[j+1]
      if(frontSum==backSum){
          return j;
      }
      j++;
  }
  return -1;
}

console.log(balanceIndex(nums1))
console.log(balanceIndex(nums2))
