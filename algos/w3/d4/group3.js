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
  coinBag = {
      quarter: 0,
      dime: 0,
      nickel: 0,
      penny: 0
  }

  while (cents >= 25){
      coinBag.quarter++;
      cents -= 25;
  }

  while (cents >= 10 ){
      coinBag.dime++;
      cents -= 10;
  }

  while (cents >= 5){
      coinBag.nickel++;
      cents -= 5
  }

  while (cents >= 1){
      coinBag.penny++;
      cents -= 1;
  }

  let cleanUp = Object.getOwnPropertyNames(coinBag);
  for (let i = 0; i < cleanUp.length; i++){
      if (coinBag[cleanUp[i]] === 0){
          delete coinBag[cleanUp[i]]
      }
  }
  return coinBag
}

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

function missingValue(unorderedNums) {}
