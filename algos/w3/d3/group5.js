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

/*function dedupeSorted(nums) {
  let result = [];

  for (let i = 0; i < nums.length; i++){
    if (result.includes(nums[i]) == false){ // .includes counts as a second loop
      result += nums[i];
    }
  }
  return result;
}*/

function dedupeSorted(nums) {
  let uniqueArr = []; // We need to create a new array because the expected outcome is an array
  
  // Loop through the array
  for(let i of nums) { 
      console.log(i) // Checking to see what i is as it loops through the nums array
      if(uniqueArr.indexOf(i) === -1) { // indexOf() function will return -1 if the value isn't found in the new array. So indexOf(1) will return -1.
          uniqueArr.push(i); // If the indexOf(i) is === to -1 we push that value i into our new array
      }
  }
  return uniqueArr; // Returns the new array with pushed values
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
//  - order doesn't matter

function mode(nums) {
  if(nums.length <2)return nums
  let dict = {}, newArr = [],largest = -9999,allSame = true
  for( let i = 0; i<nums.length; i++){
    index = nums[i]
    dict.hasOwnProperty(index)? dict[index]++:dict[inidex] = 1
    dict[index] > largest? largest = dict[index]:largest
  }
  for(let key in dict){
    dict[key] == largest? newArr.push(key):allSame = false
  }
  return !allSame? newArr : []
}
