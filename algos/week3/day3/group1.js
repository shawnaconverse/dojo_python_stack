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
// function dedupeSorted(nums) {
//   var newArr = [];
//   var len = nums.length - 1;

//   if (len >= 0) {
//     for (var i = 1; i < nums.length; i++) {
//       if (nums[i] !== nums[i + 1]) {
//             newArr.push(nums[i]);
//       }
//     }

//   }
//   return newArr
// }

// console.log((nums3))

function dedupeSorted(nums) {
  var newArr = [];
  var len = nums.length - 1;

  if (len >= 0) {
    for (var i = 0; i < len; i++) {
      if (nums[i] !== nums[i + 1]) {
        newArr.push(nums[i]);
      }
    }
    newArr.push(nums[len]);
  }
  return newArr;
}
console.log(dedupeSorted(nums1));
// you are on a good track!
// but, what happens if i = nums.length - 1 when we get to the if statement on line 44?
// nums[i + 1] now goes out of bounds of the array so it will break
// see if you can think of a workaround
// so based on your algo, you then compensated for not including the last element in the array by
// adding line 51. I like it *thumbs up*
// its not working for me any ideas
// not sure how to do it without a double for loop.
// is this considered 1 for loop?
// yeah it is, it just has if
// thanks, oh its gonna break or something . okay
// oh good, we're on a good track. lol
// yeeee good job
// thanks!
// i think the if statement at the beginning works. because once nums.length becomes zero it should just stop . maybe that will do it
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
  var numFreq = {};
}

//
