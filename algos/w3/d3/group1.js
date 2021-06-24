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
  var dup = {};
  var duplist = [];
  for (var i=0; i<nums.length; i++) {
    dup[nums[i]]=1;
  }
  for (let key in dup) {
    duplist.push(key);
  }
  return duplist;
}


function dedupeSorted(nums) {
  var duplist = [];
  for (var i=0; i<nums.length; i++) {
    if (!duplist.includes(nums[i])) {
      duplist.push(nums[i]);
    }
  }
  return duplist
}

console.log(dedupeSorted(nums1));
console.log(dedupeSorted(nums2));
console.log(dedupeSorted(nums3));

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

const nums6 = [5, 1, 4, 3, 4, 3, 1, 5];
const expected6 = [5, 1];
//  - order doesn't matter
// empty return empty
// single return single
//     both of these:  if nums.length<= 1 return nums

// if all unique numbers have the same frequency   return empty list
// if we have multiple numbers with the same frequency, return all of em
//     we need to find highest frequency number
//     then ask if any other number has that frequency
//     return nubmers that have that frequency

function mode(nums) {
  var result = []
  var dup = {};
  var frequency = 0;
  if (nums.length<=1) {
    return nums;
  }
  else {
    for (var i=0; i<nums.length; i++) {
      if (!(nums[i] in dup)) {
        dup[nums[i]] = 1;
      } else {
        dup[nums[i]] = dup[nums[i]] + 1;
      }
    }
    for (const key in dup) {
      if (dup[key] > frequency) {
        frequency = dup[key];
      }
    }
    for (const key in dup) {
      if (dup[key]==frequency) {
        result.push(key);
      }
    }
    
  }
  return result
}

console.log(mode(nums1))
console.log(mode(nums2))
console.log(mode(nums3))
console.log(mode(nums4))
console.log(mode(nums5))
