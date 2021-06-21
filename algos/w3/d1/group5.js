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
  for (var i=0.5; i<nums.length; i++) {
    //left side is 0 to < center
    var left = 0;
    for (var j = 0; j<i; j++) {
      left += nums[j];
    }
    var right = 0;
    for (var k=nums.length-1; k>i; k--) {
      right += nums[k];
    }
    if (left === right) {
      return true
    }
  }
  return false
}

console.log(balancePoint(nums1))
console.log(balancePoint(num2))

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

const nums3 = [-2, 0, 7, 0, 5];
const expected3 = 3

const nums4 = [-2, 0, 0, 0, 0];
const expected4 = -1

const nums5 = [0, 0, 0, 0, 2];
const expected5 = -1


function balanceIndex(nums) {
  for (var i=0; i<nums.length; i++) {
    var balance = {
    }
    for (var j = 0; j<i; j++) {
      if (balance['left']) {
        balance['left'] += nums[j];
      } else {
        balance['left'] = nums[j];
      }
    }
    for (var k=nums.length-1; k>i; k--) {
      if (balance['right']) {
        balance['right'] += nums[k];
      } else {
        balance['right'] = nums[k];
      }
    }
    if (balance['left'] === balance['right']) {
      return i
    }
  }
  return -1
}

console.log(balanceIndex(nums1))
console.log(balanceIndex(nums2))
console.log(balanceIndex(nums3))
console.log(balanceIndex(nums4))
console.log(balanceIndex(nums5))