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
  var expected = {}; 
  if(cents>=25) {
      expected["quarter"] = Math.floor(cents/25)
      cents = cents %25;
  }
  if(cents>=10){
    expected["dime"] = Math.floor(cents/10)
    cents = cents %10;
  }
  if(cents>=5){
    expected["nickel"] = Math.floor(cents/5)
    cents = cents %5;
  }
  if(cents>=1){
    expected["penny"] = cents; 
  }
  return expected;
  
}

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
  var sum = 0;
  var expectedsum = 0;
  var n = 0;
  var zerocheck = false;
  for(var i=0;i<unorderedNums.length;i++){
      if(unorderedNums[i]==0){
        zerocheck = true;
      }
      if (unorderedNums[i] > n) {
        n = unorderedNums[i]; // Set max value
      }
      sum += unorderedNums[i];
  }
  while (n>0) {
    expectedsum += n;
    n--;
  }
  if(zerocheck==false){
    return 0;
  }
	
  return Math.abs(sum-expectedsum==0) ? "null" : Math.abs(expectedsum-sum);
}

console.log(missingValue(nums1))
console.log(missingValue(nums2))

