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
  const quarterValue = 25;
  const dimeValue = 10;
  const nickelValue = 5;
  const pennyValue = 1;

  var change = {}

  if(cents >= quarterValue){
    var quarter = Math.floor(cents/quarterValue);
    change['quarter'] = quarter
    cents %= quarterValue
  }
  if(cents >= dimeValue){
    var dime = Math.floor(cents/dimeValue);
    change['dime'] = dime
    cents %= dimeValue
  }
  if(cents >= nickelValue){
    var nickel = Math.floor(cents/nickelValue);
    change['nickel'] = nickel
    cents %= nickelValue
  }
  if(cents >= pennyValue){
    var penny = Math.floor(cents/pennyValue);
    change['penny'] = penny
    cents %= pennyValue
  }
  return change
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

const nums3 = [9, 3, 6, 4, 8, 5, 2, 1, 0]
const expected3 = 7



function missingValue(unorderedNums) {
  var missingNumber = 0;
  for (var i = 0; i < unorderedNums.length; i++) {
    for (var j = 0; j < unorderedNums.length; j++) {
    
    if (missingNumber == unorderedNums[j]) {
      missingNumber += 1
    }
  }
  }
  if (missingNumber == unorderedNums.length) {
    return null
  }
  console.log(missingNumber)
  return missingNumber
}

console.log(missingValue(nums2))