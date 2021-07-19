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
  let leftSum = 0;
  let rightSum = nums[nums.length - 1];
  let rightCount = nums.length - 1;

  for( let i = 0; i < nums.length; i++){
    if ( i == rightCount){
      if ( leftSum == rightSum ){
        return true;
      }
      else {
        return false;
      }
    }
    if ( leftSum != rightSum){
      leftSum += nums[i];
    }
    else if ( leftSum == rightSum){
      rightCount--;
      rightSum += nums[rightCount]
    }
  }
}
function balancePoint(nums) {
  if (nums.length < 2) 
  return false;
  var sumL = 0, sumR = 0;
  for(let i = 0; i < nums.length; i++){
      sumR+=nums[i];
  }
  for(let i = 0; i < nums.length; i++){    
      if(sumL == sumR-sumL)
          return true;
      sumL+=nums[i];
      // console.log(sumL,sumR-sumL)
  }
  return false;
}

console.log(balancePoint(nums1))
console,log(balancePoint(nums2))

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

function balanceIndex(nums) {}


function balanceIndex(nums) {
  if( nums.length <=2)
      return -1;
  let sumR = 0, sumL = 0;
  for (let i = 0; i < nums.length; i++) {
      sumR += nums[i];
  }
  for (let i = 0; i < nums.length; i++) {
    // console.log(sumL,sumR - sumL - nums[i])
      if (sumL == sumR-sumL-nums[i]) 
          return i;
      sumL += nums[i];
      
  }
  return -1;

}