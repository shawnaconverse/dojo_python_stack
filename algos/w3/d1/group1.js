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

  var balanced = false
  for(var i = 0; i < nums.length; i++){
      var temp1 = nums.slice(0,i).reduce(function(a,b){
          return a + b;}, 0)
      var temp2 = nums.slice(i).reduce(function(a,b){
          return a + b;}, 0)
      if(temp1 == temp2){
          balanced = true
          return balanced
      }
  }
  return balanced
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

function balanceIndex(nums) {}
