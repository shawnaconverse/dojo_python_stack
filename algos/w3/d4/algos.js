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
  var coin = {};
  if (cents <= 0) return coin;

  var quarter = Math.floor(cents / 25);
  cents -= 25 * quarter;
  var dime = Math.floor(cents / 10);
  cents -= 10 * dime;
  var nickel = Math.floor(cents / 5);
  cents -= 5 * nickel;
  var penny = Math.floor(cents / 1);
  cents -= penny;

  if (quarter != 0) coins["quarter"] = quarter;
  if (dime != 0) coins["dime"] = dime;
  if (nickel != 0) coins["nickel"] = nickel;
  if (penny != 0) coins["penny"] = penny;

  return coins;
}

function fewestCoinChange2(cents) {
  var coins = {};

  if (cents >= 25) {
    var quartersCount = Math.floor(cents / 25);
    cents -= quartersCount * 25;
    coins["quarter"] = quartersCount;
  }

  if (cents >= 10) {
    const dimesCount = Math.floor(cents / 10);
    cents -= dimesCount * 10;
    denominationTable["dime"] = dimesCount;
  }

  if (cents >= 5) {
    const nickelsCount = Math.floor(cents / 5);
    cents -= nickelsCount * 5;
    denominationTable["nickel"] = nickelsCount;
  }

  if (cents > 0) {
    denominationTable["penny"] = cents;
  }

  return denominationTable;
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
  var missingValue = null;
  sortedNums = unorderedNums.sort();
  for (var i = 0; i < sortedNums.length - 1; i++) {
    if (sortedNums[i] + 1 !== sortedNums[i + 1]) {
      missingValue = sortedNums[i] + 1;
    }
  }
  return missingValue;
}

function missingValue(unorderedNums) {
  //sort the array
  sortedNums = unorderedNums.sort();
  result = null;

  j = sortedNums[0];

  for (var i = 0; i < sortedNums.length; i++) {
    if (sortedNums[i] != j) {
      result = j;
    } else if (sortedNums[i] == j) {
      j++;
    }
  }
  return result;
}
