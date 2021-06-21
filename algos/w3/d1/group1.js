/* 
  Balance Point
  Write a function that returns whether the given
  array has a balance point BETWEEN indices, 
  where one side’s sum is equal to the other’s. 
*/

const nums1 = [1, 2, 3, 4, 10];
const expected1 = true;
// Explanation: between indices 3 & 4
d
const nums2 = [1, 2, 4, 2, 1];
const expected2 = false;

function balancePoint(nums) {}

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
  var beforeSum = 0
  var afterSum = 0
  if (nums.length < 3){
    return -1
  }
  for(var i = 1; i<nums.length-1;i++){
    for(var j = 0; j < i; j++){
      beforeSum+=nums[j]
      console.log(beforeSum)
    }
    for(var k = i+1; k<nums.length-1; k++){
      afterSum+=nums[k]
      console.log(afterSum)
    }
    beforeSum=0
    afterSum=0
    console.log(beforeSum)
    console.log(afterSum)
  }
}

balanceIndex(nums1)







function balanceIndex(arr) {
  var i, j;
  var leftsum, rightsum;

  for (i = 0; i < arr.length; i++){
    leftsum = 0;
      for (let j = 0; j < i; j++)
      leftsum += arr[j];

      rightsum = 0;
      for (let j = i + 1; j < arr.length; j++)
      rightsum += arr[j];

      if (leftsum == rightsum)
        return i
  }
  return -1;
}

var arr = [-2, 5, 7, 0, 3];
console.log(balanceIndex(arr));