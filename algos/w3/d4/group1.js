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


function coinChangeHelper(coinVal, coinType, cents, changeObj){
  let remainder = 0
  remainder = cents % coinVal
  if (cents-remainder > 0){
    changeObj[coinType] = (cents-remainder)/coinVal
    cents = cents - changeObj[coinType]*coinVal
  }
  return cents
}

function fewestCoinChange(cents) {
  let changeObj = {}
  cents = coinChangeHelper(25, "quarter", cents, changeObj)
  cents = coinChangeHelper(10, "dime", cents, changeObj)
  cents = coinChangeHelper(5, "nickel", cents, changeObj)
  cents = coinChangeHelper(1, "penny", cents, changeObj)
  return changeObj
}


console.log(fewestCoinChange(cents1))
console.log(fewestCoinChange(cents2))
console.log(fewestCoinChange(cents3))
console.log(fewestCoinChange(cents4))


//create remainder var
//create empty dict
// take given cents, modulo 25, store that result as remainder
// subtract remainder from cents. divide result by 25 and  if the result is greater than 0, store as quarter in dict.
//repeat for dime and nickel
//final remainder is penny.
//return dict

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
	unorderedNums.sort()
	for (var i = 0; i < unorderedNums.length-1; i++) {
		if(unorderedNums[i] != unorderedNums[i+1] - 1) return unorderedNums[i] + 1
	}
	return null
}

console.log(missingValue(nums1))
console.log(missingValue(nums2))
