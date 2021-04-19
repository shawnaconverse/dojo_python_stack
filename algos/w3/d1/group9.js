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

//create a var that is front sum/ its value is initially a[0]
//begin for loop with a[0] and see if it is equal to a[1]+ all other a[] until a[length](another for loop to add these)
//if not equal then front sum is a[0] + a[1], and see if is equal to a[2] , adding each a[] until a[length]
//Once front sum is equal to back sum, return True.....

function balancePoint(nums) {
  var leftsum = nums[0];
  var totalsum = 0;
  // Sum of all numbers in the array
  for (var i = 0; i < nums.length; i++) {
      totalsum += nums[i];
  }
  // Start from the second element in the array
  for (i = 1; i < nums.length; i++) {
      // Subtract the previous element from the sum of all numbers in array
      totalsum -= nums[i-1];
      // Compare leftsum and totalsum
      if (leftsum === totalsum) {
          return true;
      }
      // Add current element to leftsum
      leftsum += nums[i];
  }
  return false;
}  
console.log(balancePoint(nums1));
console.log(balancePoint(nums2));

/***************************************************************************/

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

//compare front sum to (back sum minus the value of whatever a[] front sum is on + 1
//that number is your balance point

function balanceIndex(nums) {
  var leftsum = 0;
  var totalsum = 0;
  // Sum of all numbers in the array
  for (var i = 0; i < nums.length; i++) {
      totalsum += nums[i];
  }
  for (i = 0; i < nums.length; i++) {
      // Subtract the current element from the sum of all numbers in array
      totalsum -= nums[i];
      // Compare leftsum and totalsum; if true, return current index
      if (leftsum === totalsum) {
          return i;
      }
      // Add current element to leftsum
      leftsum += nums[i];
  }
  return -1;
}

console.log(balanceIndex(nums1));
console.log(balanceIndex(nums2));
