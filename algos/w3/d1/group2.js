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
    let sumofArray = nums[0]
    for (let i = 1; i < nums.length ;i++){
      sumofArray += nums[i]
      let remainingArraySum = 0
      for (let j=i+1; j < nums.length; j++){
        remainingArraySum +=nums[j]
      }
      if (remainingArraySum === sumofArray){
        return true
      }
    }
    return false
}
console.log(balancePoint(nums1))
console.log(balancePoint(nums2))



//track sum of array, starting with arr[0]
//iterate through array
//add value to sum
//create remainingSum
//iterate through the rest of the array in a nested loop
//add to remaingSum
//compare to sum
//if true, return True
//if first loop closes, return false






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
  if (nums.length < 3){
    return -1
  }
  let balanceIndex = 0
  if (nums.length === 3){
    if (nums[0] === nums[2]){
      return 1
    } else{
      return -1
    }
  }
  let sumofArray = 0
  for (let i = 1; i < nums.length ;i++){
    sumofArray += nums[i-1]
    let remainingArraySum = 0
    for (let j=i+1; j < nums.length; j++){
      remainingArraySum += nums[j]
    }
    if (remainingArraySum === sumofArray){
      return i
    }
  }
  return -1
}

console.log(balanceIndex(nums1))
console.log(balanceIndex(nums2))

//if array is less than 3, return -1
//track balanceIndex
//if array is = 3, compare first and last, if equal, set balanceIndex to 1
//track sum of array, starting with arr[0]
//iterate through array
//add value to sum
//create remainingSum
//iterate through the rest of the array in a nested loop
//add to remaingSum
//compare to sum
//if true, log as balanceIndex
//return i[]

