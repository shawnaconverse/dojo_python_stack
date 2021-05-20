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
  ary = []
  for (var i = 0; i < nums.length; i++){
    if(nums[i] != nums[i+1]){
      ary.push(nums[i])
    }
  }
  return ary
}

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
  if (nums.length < 2) return nums;

  var dict = {}
  var new_array = []

  for (var i = 0; i < nums.length; i++){
    if(dict[nums[i]] in dict){
      dict[nums[i]]++;
    } else {
      dict[nums[i]] = 1;
    }
  }
  var highest = 0;
  for(var [key,value] of Object.entries(dict)){
      if(value > highest){
        highest = value
      }
  }
  for(var [key,value] of Object.entries(dict)){
    if(value == highest){
        if(!new_array.includes(value)){
            new_array.push(parseInt(key))
        }
    }
  }
  return new_array;
}
