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

// time complexity: O(N)
// space complexity: O(1)
function dedupeSorted(nums) { 
    let nextNoDupliIndx = 1;
    let numsLength = nums.length
    let i = 1

    while (i < numsLength){
          // if current num is not equal previous num, put non-duplicate value in current place
          // increase pointer
          if (nums[nextNoDupliIndx - 1] != nums[i]){
              nums[nextNoDupliIndx] = nums[i]
              nextNoDupliIndx += 1
          }
          i += 1
    }
    return nums.slice(0, nextNoDupliIndx)
}

console.log(dedupeSorted(nums1))
console.log(dedupeSorted(nums2))
console.log(dedupeSorted(nums3))

function dedupeSorted(nums) {
  var arr = []
  for(var i = 0; i < nums.length; i++){
    if(arr.includes(nums[i]) === false){
      arr.push(nums[i])
    }
  }
  return arr
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


// time complexity: O(N)
// space complexity: O(N)
function mode(nums) {
  if (nums.length <= 1) return nums

  let numFrequency = {}
  let mostFrequencyNum = []
  let maxFreNum = -Infinity
  let maxFre = -Infinity

  // store all num and its frequency in numFrequency object,
  for (const num of nums) {
    numFrequency[num] = numFrequency[num] + 1 || 1
  }

  // find and store maxFrequency and its num
  for (const num in numFrequency) {
    if (numFrequency[num] > maxFreNum) {
      maxFreNum = num
      maxFre = numFrequency[num]
    }
  }

  // push the most frequency num into output arr called mostFrequencyNum
  maxFre = parseInt(maxFre)
  if (maxFre != 1) {
    mostFrequencyNum.push(parseInt(maxFreNum))
  }

  // iterate object to check if items occur the same time
  for (const num in numFrequency) {
    // if maxFrequency not 1 and the frequency is equal to our max-frequency, and output arr doesn;t include the num,
    //  push num to output arr
    if (maxFre != 1 && numFrequency[num] === maxFre && !mostFrequencyNum.includes(parseInt(num))) {
      mostFrequencyNum.push(parseInt(num))
    }
  }
  return mostFrequencyNum
}

console.log(mode(nums1));
console.log(mode(nums2));
console.log(mode(nums3));
console.log(mode(nums4));
console.log(mode(nums5));