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
    var newDict = []
    var count = 0
    var remainder = cents;

      if(cents != 0){ //quarters
        count = Math.floor(cents / 25) //only want the whole number
        remainder = cents - count * 25;  //subtract from remainder
        newDict.push({key:"quarter", value: count});
      }
      else if(cents % 10 == 0)        //dimes
        count = Math.floor(cents / 10) //only want the whole number
        remainder = cents - count * 10
        newDict.push({key:"dime", value: count});
      )
      else if{()       //nickels
        count = Math.floor(cents / 5) //only want the whole number
        remainder = cents - count * 5
        newDict.push({key:"nickel", value: count});
      
      else{        //pennies       
        count = cents
        newDict.push({key:"pennie", value: count});
      }
      
    return newDict
   
}
console.log(fewestCoinChange(cents1))



var dict = []; // create an empty array

dict.push({
    key:   "keyName",
    value: "the value"
});

      var quarter = Math.floor(cents/25)
      var dime = Math.floor(cents/10)
      var nickel = Math.floor(cents/5)
      var penny = Math.floor(cents/1)

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
