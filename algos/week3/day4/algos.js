/* 
    Given an int to represent how much change is needed
    calculate the fewest number of coins needed to create that change,
    using the standard US denominations
*/
d;
const cents1 = 25;
const expected1 = { quarter: 1 };

const cents2 = 50;
const expected2 = { quarter: 2 };

const cents3 = 9;
const expected3 = { nickel: 1, penny: 4 };

const cents4 = 99;
const expected4 = { quarter: 3, dime: 2, penny: 4 };

function fewestCoinChange(cents) {
  var denomination = {};

  if (cents >= 25) {
    var quartersCount = Math.floor(cents / 25);
    cents -= quartersCount * 25;
    denomination["quarter"] = quartersCount;
  }

  if (cents >= 10) {
    var dimesCount = Math.floor(cents / 10);
    cents -= dimesCount * 10;
    denomination["dime"] = dimesCount;
  }

  if (cents >= 5) {
    var nicklesCount = Math.floor(cents / 5);
    cents -= nicklesCount * 5;
    denomination["nickle"] = nicklesCount;
  }

  if (cents > 0) {
    denomination["penny"] = cents;
  }

  return denomination;
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
  if (unorderedNums.length < 1) {
    return null;
  }

  var min = unorderedNums[0];
  var max = unorderedNums[0];
  var sum = 0;
  var expectedSum = 0;

  // build the sum varible
  // set the min and max
  for (var n of unorderedNums) {
    sum += n;
    if (n < min) {
      min = n;
    }
    if (n > max) {
      max = n;
    }
  }

  // build the expectedSum using the min and max
  for (var i = min; i <= max; i++) {
    expectedSum += i;
  }

  // Ternary Statement
  // just syntax sugar for an if statement
  return sum === expectedSum ? null : expectedSum - sum;
  // if (sum === expectedSum) {
  //     return null;
  // } else {
  //     return expectedSum - sum;
  // }
}
