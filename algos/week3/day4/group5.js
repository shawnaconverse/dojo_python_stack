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
  var change = {};
  while (cents >= 25) {
    if (change.hasOwnProperty("quarters")) {
      change["quarters"]++;
      cents -= 25;
    } else {
      change["quarters"] = 1;
      cents -= 25;
    }
  }
  while (cents >= 10) {
    if (change.hasOwnProperty("dimes")) {
      change["dimes"]++;
      cents -= 10;
    } else {
      change["dimes"] = 1;
      cents -= 10;
    }
  }
  while (cents >= 5) {
    if (change.hasOwnProperty("nickels")) {
      change["nickels"]++;
      cents -= 5;
    } else {
      change["nickels"] = 1;
      cents -= 5;
    }
  }
  change["pennies"] = cents;
  return change;
}
console.log(fewestCoinChange(cents4));

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

function missingValue(unorderedNums) {}
