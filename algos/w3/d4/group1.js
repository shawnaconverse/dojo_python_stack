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
  var quart = 0;
  var dimes = 0;
  var nickels = 0;
  var pennies = 0;
  var coins = {};

  while (cents > 0) {

      if (cents >= 25) {
          quart = Math.floor(cents / 25);
          cents %= 25;
      } else if (cents >= 10) {
          dimes = Math.floor(cents / 10);
          cents %= 10;
      } else if (cents >= 5) {
          nickels = Math.floor(cents / 5);
          cents %= 5;
      } else {
          pennies = cents;
          cents -= pennies;
      }
  }
  if (quart > 0){
    coins['quarter']=quart;
  }
  if (dimes > 0){
    coins['dimes']=dimes;
  }
  if (nickels > 0){
    coins['nickels']=nickels;
  }
  if (pennies > 0){
    coins['pennies']=pennies;
  }
  return coins; 
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



}



function missingValue(unorderedNums) {
  for(let i=1; i<unorderedNums.length; i++){
      for(let j=i-1; j>-1; j--){
          if(unorderedNums[i]<unorderedNums[j]){
              let temp=unorderedNums[i];
              unorderedNums[i]=unorderedNums[j];
              unorderedNums[j]=temp;
          }
      }
  }
  for(let k=0; k<unorderedNums.length-1; k++){
      if(unorderedNums[k]+1!=unorderedNums[k+1]){
          return unorderedNums[k]+1;
      }
  }
  return null;
}

function missingValue(unorderedNums) {
  correctArr=[0];
  max=unorderedNums[0]
  for(let i=1; i<unorderedNums.length; i++){
      correctArr.length+=1;
      correctArr[correctArr.length-1]=i;
      if(unorderedNums[i]>max){
          max=unorderedNums[i];
      }
  }
  if(max!=correctArr.length-1){
      for(let j=max-correctArr.length; j>-1; j--){
          correctArr.length+=1;
          correctArr[correctArr.length-1]=max-j;
      }
  }
  sum=0;
  correctSum=0;
  for(let k=0; k<correctArr.length; k++){
      if(k<unorderedNums.length){
          sum+=unorderedNums[k];
      }
      correctSum+=correctArr[k];
  }
  if(correctSum-sum==0){
      return null
  }
  return correctSum-sum;
}