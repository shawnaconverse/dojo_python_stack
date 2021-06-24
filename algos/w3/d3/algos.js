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
  var duplist = [];
  for (var i=0; i<nums.length; i++) {
    if (!duplist.includes(nums[i])) {
      duplist.push(nums[i]);
    }
  }
  return duplist
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
  if(nums.length<2){
    return nums;
  }
  var dict = {};
  let max = 1;
  for(let num of nums){

    if(dict[num]){
      dict[num]+=1;
      max =  max<dict[num] ? dict[num] : max;
    }
    else  {
      dict[num] = 1;
    }
  }
  let counter = 0;
  var retArr = [];
  for(let key in dict){
    counter++;
    if(dict[key]==max){
      retArr.push(parseInt(key));
    }
  }
  if (counter== retArr.length){
    return [];
  }
  return retArr;
}


function modeShawn(nums) {
  if (nums.length < 2) return nums;

  const modes = [];
  const freq = {};
  let maxFreq = 0;
  let allSameFreq = true;

  for (const n of nums) {
    // if (freq.hasOwnProperty(n)) {
    //   freq[n]++;
    // } else {
    //   freq[n] = 1;
    // }

    freq.hasOwnProperty(n) ? freq[n]++ : (freq[n] = 1); // syntatic sugar

    if (freq[n] > maxFreq) (maxFreq = freq[n]);
  }

  for (const key in freq) {
    if (freq[key] === maxFreq) {
      modes.push(parseInt(key));
    } else {
      allSameFreq = false;
    }
  }

  return allSameFreq ? [] : modes;
}
