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
    let dict = {}
    while (cents > 0){
        if (cents >= 25){
        cents = cents - 25;
            if (!("quarter" in dict)){
                dict.quarter = 1;
            }
            else{
                dict.quarter += 1;
            }
        }
        else if (cents >= 10){
            cents = cents - 10;

            if (!("dime" in dict)){
                dict.dime = 1;
            }
            else{
            dict.dime += 1;
            }
        }
        else if (cents >= 5){
            cents = cents - 5;

            if (!("nickel" in dict)){
            dict.nickel = 1;
            }
            else{
            dict.nickel += 1;
            }
        }
        else if (cents >= 1){
            cents = cents - 1;
            if (!("penny" in dict)){
            dict.penny = 1;
            }
            else{
            dict.penny += 1;
            }
        }
    }
    return dict;
}

console.log(fewestCoinChange(cents1))
console.log(fewestCoinChange(cents2))
console.log(fewestCoinChange(cents3))
console.log(fewestCoinChange(cents4))


function fewestCoinChange(cents) {
    let coinsDict = {}
    if(cents != 0 && cents / 25 >= 1) {
        coinsDict.quarter = Math.floor(cents / 25)
        cents %= 25;
    }
    if(cents != 0 && cents / 10 >= 1) {
        coinsDict.dimes = Math.floor(cents / 10)
        cents %= 10;
    }
    if(cents != 0 && cents / 5 >= 1) {
        coinsDict.nickle = Math.floor(cents / 5)
        cents %= 5;
    }
    if(cents != 0)
      coinsDict.penny = cents;
    return coinsDict;
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
  for(let i = 0; i < unorderedNums.length; i++) {
    if(unorderedNums.sort()[i] != i)
      return i;
  }
  return null;
}
