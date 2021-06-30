/* 
  Given an int to represent how much change is needed
  calculate the fewest number of coins needed to create that change,
  using the standard US denominations
*/

const cents1 = 25;
const expected1 = { quarter: 1 };

const cents2 = 50;
const expected2 = { quarter: 2 };

const cents3 = 9;
const expected3 = { nickel: 1, penny: 4 };

const cents4 = 99;
const expected4 = { quarter: 3, dime: 2, penny: 4 };

function fewestCoinChange(cents) {
  if (cents < 1) {
    return false;
  }
  let denominations = [25, 10, 5, 1];
  let names = ["quarter", "dime", "nickel", "penny"];
  let result = {};
  for (let i = 0; i < denominations.length; i++) {
    if (Math.floor(cents / denominations[i] != 0)) {
      result[names[i]] = Math.floor(cents / denominations[i]);
      cents = cents % denominations[i];
    }
  }
  return result;
}
/*****************************************************************************/

/* 
  Missing Value
  You are given an array of length N that contains, in no particular order,
  integers from 0 to N . One integer value is missing.
  Quickly determine and return the missing value.
*/

const nums1 = [3, 0, 1];
const expected1 = 2;

const nums2 = [3, 0, 1, 2];
const expected2 = null;
// Explanation: nothing is missing

function missingValue(unorderedNums) {
  let nums = {};

  for (let i = 0; i < unorderedNums.length; i++) 
  {
    nums[unorderedNums[i]] = 1;
  }

  for (let i = 0; i < unorderedNums.length; i++) 
  {
    if (!nums[i]) 
    {
      return i;
    }
  }
  return null;
}
