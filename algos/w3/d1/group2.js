           /* 
  Balance Point
  Write a function that returns whether the given
  array has a balance point BETWEEN indices, 
  where one side’s sum is equal to the other’s. 
*/

const nums1 = [1, 2, 3, 4, 10];
// const expected1 = true;
// Explanation: between indices 3 & 4

// const nums2 = [1, 2, 4, 2, 1];
// const expected2 = false;

function balancePoint(nums) {
  let sumLeft = 0;
  let sumRight = 0;

  for (let i=0; i < nums.length; i++) {
    sumLeft += nums[i]
    sumRight = 0;
    console.log(sumLeft)
    for (let j=i+1; j < nums.length; j++) {
      sumRight += nums[j]
      console.log(sumRight)    
    }
    if (sumLeft == sumRight) {
      return true
    }
  }
  return false
}
  
balancePoint(nums1)


/*****************************************************************************/

/* 
  Balance Index
  Here, a balance point is ON an index, not between indices.
  Return the balance index where sums are equal on either side
  (exclude its own value).
  
  Return -1 if none exist.
*/

const nums1 = [-2, 5, 7, 0, 3];
// const expected1 = 2;

// const nums2 = [9, 9];
// const expected2 = -1;

function balanceIndex(nums) {
  let sumLeft = 0;
  let sumRight = 0;

  if (nums.length < 3) {
    return -1
  }
  
  for (let i=0; i < nums.length; i++) {
    sumLeft += nums[i]
    sumRight = 0;
    console.log(sumLeft)
    for (let j=i+2; j < nums.length; j++) {
      sumRight += nums[j]
      console.log(sumRight)    
    }
  }
  if (sumLeft == sumRight) {
    return i
  } else {
    return -1
  }
}

balanceIndex(nums1)
