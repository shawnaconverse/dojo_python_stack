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
  arr = {};
  var quarters = 0;
  var dimes = 0;
  var nickels = 0;
  while (cents != 0) {
    console.log(cents);
    while (cents >= 25) {
      cents = cents - 25;
      quarters++;
      arr["quarters"] = quarters;
    }
    while (cents >= 10) {
      cents = cents - 10;
      dimes++;
      arr["dimes"] = dimes;
    }
    while (cents >= 5) {
      cents = cents - 5;
      nickels++;
      arr["nickels"] = nickels;
    }
    while (cents != 0) {
      arr["penny"] = cents;
      cents = 0;
    }
  }
  return arr;
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

function missingValue(unorderedNums) {
  var missingno;
  for (let i = 0; i < unorderedNums.length; i++) {
    for (let j = 0; j < unorderedNums.length; j++) {
      if (unorderedNums[j] > unorderedNums[j + 1]) {
        let temp = unorderedNums[j];
        unorderedNums[j] = unorderedNums[j + 1];
        unorderedNums[j + 1] = temp;
      }
    }
  }
  for (i = 0; i < unorderedNums.length; i++) {
    if (i != unorderedNums[i]) {
      missingno = i;
    }
    if (i == unorderedNums.length - 1 && i == unorderedNums[i]) {
      missingno = null;
    }
  }
  return missingno;
}
