/* 
  Given a SORTED array of integers, dedupe the array 
  Because array elements are already in order, all duplicate values will be grouped together.
  Ok to use a new array
  Bonus: do it in O(n) time (no nested loops, new array ok)
*/

const nums1 = [1, 1, 1, 1];
const expected1 = [1];

const nums2 = [1, 1, 2, 2, 3, 3];
const expected2 = [1, 2, 3];

const nums3 = [1, 1, 2, 3, 3, 4];
const expected3 = [1, 2, 3, 4];

function dedupeSorted(nums) {
  newArray = []

  for (let i = 0; i < nums.length; i++){
    if (!newArray.includes(nums[i])){
      newArray.push(nums[i])
    }
  }
  return newArray
}

console.log(dedupeSorted(nums1))
console.log(dedupeSorted(nums2))
console.log(dedupeSorted(nums3))

/*****************************************************************************/

/* 
  Array: Mode
  
  Create a function that, given an array of ints,
  returns the int that occurs most frequently in the array.
  What if there are multiple items that occur the same number of time?
    - return all of them (in an array)
    - what if all items occur the same number of times?
    - return empty array
*/

const nums1 = [];
const expected1 = [];

const nums2 = [1];
const expected2 = [1];

const nums3 = [5, 1, 4];
const expected3 = [];

const nums4 = [5, 1, 4, 1];
const expected4 = [1];

const nums5 = [5, 1, 4, 1, 5];
const expected5 = [5, 1];

const nums6 = [5, 5, 6, 2, 7, 2, 1, 4, 1, 1, 5];
const expected6 = [5, 1];
//  - order doesn't matter


function mode(nums) {
  uniqueNums = [];
  maxFreq = 0;
  currentNum = 0;
  returnArr = [];

  for(let i = 0; i < nums.length; i++) {
      currentNum = nums[i];
      currentFreq = 0;
      if(!uniqueNums.includes(nums[i]))
          uniqueNums.push(nums[i]);
      for(let j = i; j < nums.length; j++) {
          if(nums[j] == nums[i])
              currentFreq++;
      }
      if(currentFreq > maxFreq) {
          returnArr = []
          maxFreq = currentFreq
          returnArr.push(nums[i])
      }
      else if(currentFreq == maxFreq)
          returnArr.push(nums[i])
  }

  if(uniqueNums.length != 1 && uniqueNums.length * maxFreq == nums.length)
      return []

  return returnArr
}




