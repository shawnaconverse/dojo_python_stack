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
  let coins = {};
    if (cents >= 25) {
      coins["quarters"] = Math.floor(cents / 25);
      cents %= 25;
    }
    if (cents >= 10) {
      coins["dimes"] = Math.floor(cents / 10);
      cents %= 10;
    }
    if (cents >= 5) {
      coins["nickels"] = Math.floor(cents / 5);
      cents %= 5;
    }
    if (cents > 0) {
      coins["pennies"] = cents;
    }

  return coins;    
}

/*
function fewestCoinChange(cents) {

  coinDict={"quarter": 25, "dime": 10, "nickel": 5, "penny": 1}
  let coins={}
  for (let key in coinDict){ 
    if(coinDict[key]>=cents){
      coins[key]=Math.floor(coins/coinDict[key])
      cents%=coinDict[key];
    }
  }
  return coins
*/
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

function missingValue(unorderedNums) 
{
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




console.log(missingValue(nums1))
console.log(missingValue(nums2))