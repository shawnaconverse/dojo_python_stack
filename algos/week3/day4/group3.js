/* 
    Given an int to represent how much change is needed
    calculate the fewest number of coins needed to create that change,
    using the standard US denominations
*/
function fewestCoinChange(cents) {
  var coins = [25, 10, 5, 1];
  var result = {};
  if (cents === 0) {
    return result;
  } else {
    if (cents >= coins[0]) {
      left = cents - coins[0];
      if (!result.quarter) {
        result.quarter = 1;
      } else {
        result.quarter += 1;
      }
      return fewestCoinChange(left);
    } else {
      coins.shift();
      return fewestCoinChange(cents);
    }
  }
}

const cents1 = 25;
const expected1 = { quarter: 1 };

const cents2 = 50;
const expected2 = { quarter: 2 };

const cents3 = 9;
const expected3 = { nickel: 1, penny: 4 };

const cents4 = 99;
const expected4 = { quarter: 3, dime: 2, penny: 4 };

function fewestCoinChange(cents) {
  quarters = 0;
  dimes = 0;
  nickels = 0;
  pennies = 0;

  while (cents % 25 === 0) {
    cents -= 25;
    quarters++;
  }

  while (cents % 10 === 0) {
    cents -= 10;
    dimes++;
  }

  while (cents % 5 === 0) {
    cents -= 5;
    nickels++;
  }
  pennies = cents;

  piggy_bank = {
    quarters: [quarters],
    dimes: [dimes],
    nickels: [nickels],
    pennies: [pennies],
  };
  return piggy_bank;
}
console.log(fewestCoinChange(cents2));

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

function missingValue(nums) {
  // either sort and count from low to high to find missing value
  // or find min and max and check in array .includes all values

  max = min = nums[0];
  for (var i = 0; i < nums; i++) {
    if (nums[i] > max) {
      max = nums[i];
    } else if (nums[i] < min) {
      min = nums[i];
    }
  }
  for (var j = min; j < max; j++) {
    if (!nums[j].includes(nums[j])) {
      return nums[j];
    }
  }
}

function missingValue(nums) {
  // either sort and count from low to high to find missing value
  // or find min and max and check in array .includes all values
  newnum = nums.sort();
  for (var i = 0; i < newnum.length; i++) {
    // newnum[i] + 1 != newnum[i + 1]
    if (newnum[i] != newnum[i + 1] - 1) {
      missing = newnum[i] + 1;
      return missing;
    }
  }
  return null;
}

console.log(missingValue(nums1));
