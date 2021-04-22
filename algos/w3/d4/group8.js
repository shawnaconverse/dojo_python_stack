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
  exp_obj = {}
  cents_adj = cents
  
  // if the total amount of 'cents' > 25 then we want to add quarters
  if(cents_adj >= 25){
    exp_obj['quarters'] = Math.floor(cents_adj/25)
    cents_adj -= (exp_obj['quarters'] * 25)
  }
  // same for further coin amounts (ie, 10, 5, 1)
  if(cents_adj >=10){
    exp_obj['dimes'] = Math.floor(cents_adj/10)
    cents_adj -= (exp_obj['dimes'] * 10)
  }
  if(cents_adj >=5){
    exp_obj['nickels'] = Math.floor(cents_adj/5)
    cents_adj -= (exp_obj['nickels'] * 5)
  }
  if(cents_adj >=1){
    exp_obj['pennies'] = Math.floor(cents_adj/1)
    cents_adj -= (exp_obj['pennies'] * 1)
  }
  // continue until we have total of all coins to add to the object
  if(cents_adj == 0){
    return exp_obj
  }
}
// add only coins with use > 0 to the object

console.log(fewestCoinChange(cents1))
console.log(fewestCoinChange(cents2))
console.log(fewestCoinChange(cents3))
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

function missingValue(unorderedNums) {
  //sort the array
  sortedNums = unorderedNums.sort()
  result = null

  j = sortedNums[0]

  for(var i = 0; i < sortedNums.length; i++){
    if (sortedNums[i] != j){
      result = j
    }
    else if (sortedNums[i] == j){
      j++
    }
  }
  return result
}

console.log(missingValue(nums1))
console.log(missingValue(nums2))
