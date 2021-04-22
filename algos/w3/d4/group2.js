/* 
  Given an int to represent how much change is needed
  calculate the fewest number of coins needed to create that change,
  using the standard US denominations
*/

function fewestCoinChange(cents) {
  var coin = {}
  if (cents <= 0) return coin

  var quarter = Math.floor(cents / 25)
  cents -= 25 * quarter
  var dime = Math.floor(cents / 10)
  cents -= 10 * dime 
  var nickel = Math.floor(cents / 5)
  cents -= 5 * nickel
  var penny = Math.floor(cents / 1)
  cents -= penny

  if (quarter != 0) coins['quarter'] = quarter
  if (dime != 0) coins['dime'] = dime
  if (nickel != 0) coins['nickel'] = nickel
  if (penny != 0) coins['penny'] = penny

  return coins

}

const cents1 = 25;
const expected1 = { quarter: 1 };
console.log(fewestCoinChange(cents1))

const cents2 = 50;
const expected2 = { quarter: 2 };
console.log(fewestCoinChange(cents2))

const cents3 = 9;
const expected3 = { nickel: 1, penny: 4 };
console.log(fewestCoinChange(cents3))

const cents4 = 99;
const expected4 = { quarter: 3, dime: 2, penny: 4 };
console.log(fewestCoinChange(cents4))


/*****************************************************************************/

/* 
  Missing Value
  You are given an array of length N that contains, in no particular order,
  integers from 0 to N . One integer value is missing.
  Quickly determine and return the missing value.
*/

function missingValue(unorderedNums) {
  var max = Math.max(...unorderedNums)
  for (var i = 0; i < max; i++){
      if (unorderedNums.indexOf(i) === -1) return i
  }
  return null
}


const nums1 = [3, 0, 1];
const expected1 = 2;
console.log(missingValue(nums1))

const nums2 = [3, 0, 1, 2];
const expected2 = null;
// Explanation: nothing is missing
console.log(missingValue(nums2))
