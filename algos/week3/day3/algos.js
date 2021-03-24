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

/**
 * De-dupes the given sorted array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @return {Array<number>} The given array deduped.
 */
// [].includes(1) => true or false if the arguement is inside of the array
// O(n * m)
function dedupeSortedNestedFor(nums) {
  var returnArr = [];

  for (var i = 0; i < nums.length; i++) {
    if (!returnArr.includes(nums[i])) {
      returnArr.push(nums[i]);
    }
  }

  return returnArr;
}

// O(n)
function dedupeSortedSingleFor(nums) {
  if (nums.length <= 1) {
    return nums;
  }
  var returnArr = [];

  for (var i = 0; i < nums.length; i++) {
    if (nums[i] !== returnArr[returnArr.length - 1]) {
      returnArr.push(nums[i]);
    }
  }

  return returnArr;
}
// spread operator = ...
// anonymous function
const dedupeSortedSpecial = (nums) => [...new Set(nums)];
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
  if (nums.length <= 1) {
    return nums;
  }

  var modes = [];
  var freq = {};
  var maxFreq = 0;
  var allSameFreq = true;

  for (var n of nums) {
    if (freq.hasOwnProperty(n)) {
      freq[n]++;
    } else {
      freq[n] = 1;
    }

    if (freq[n] > maxFreq) {
      maxFreq = freq[n];
    }
  }

  for (var key in freq) {
    if (freq[key] === maxFreq) {
      modes.push(parseInt(key));
    } else {
      allSameFreq = false;
    }
  }

  if (allSameFreq) {
    return [];
  } else {
    return modes;
  }
}
