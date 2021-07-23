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
  let coinNum = {};
  // if cents exist, keep changing it
  // get max-coin first every time
  while (cents) {
    if (cents % 25 == 0) {
      coinNum["quarter"] = cents / 25; // get all num of quarter
      cents %= 25;
    } else if (cents % 10 == 0) {
      coinNum["dime"] = cents / 10;    // get all num of dime
      cents %= 10;
    } else if (cents % 5 == 0) {
      coinNum["nickel"] = cents / 5; // get all num of nickel
      cents %= 5;
    } else {
      coinNum["penny"] = cents / 1; // get all num of penny
      cents %= 1;
    }
  }
  return coinNum;
}

console.log(fewestCoinChange(cents1))
console.log(fewestCoinChange(cents2))
console.log(fewestCoinChange(cents3))
console.log(fewestCoinChange(cents4))
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
    // sum = n(n+1)/2 , n is the max number
    let maxVal = unorderedNums.reduce((a, b) => Math.max(a, b))
    let expectedSum = (maxVal * (maxVal + 1)) / 2
    let actualSum = unorderedNums.reduce((a, b) => a + b)
    return (expectedSum - actualSum == 0)? null: expectedSum - actualSum
}

console.log(missingValue(nums1))
console.log(missingValue(nums2))