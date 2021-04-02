/* 
    Recursively reverse a string
    helpful methods:
    str.slice(beginIndex[, endIndex])
    returns a new string from beginIndex to endIndex exclusive
*/

const str1 = "abc";
const expected1 = "cba";

const str2 = "";
const expected2 = "";

function reverseStr(str) {
  // first character of the string
  // the rest of the string
  // some for of concatination
  if (str === "") {
    return "";
  }
  var strMinusFirst = str.slice(1);
  return reverseStr(strMinusFirst) + str[0];
}

/*****************************************************************************/

/*
    Sum To One Digit
    Implement a function sumToOne(num)​ that,
    given a number, sums that number’s digits
    repeatedly until the sum is only one digit. Return
    that final one digit result.
    Tips:
        to access digits from a number, need to convert it .toString() to access each digit via index
        parseInt(arg) returns arg parsed as an integer, or NaN if it couldn't be converted to an int
        isNaN(arg) used to check if something is NaN
*/

const num1 = 5;
const expected1 = 5;

const num2 = 10;
const expected2 = 1;

const num3 = 25;
const expected3 = 7;

// Bonus
const num4 = 57; // 5 + 7 = 12 => 1 + 2
const expected4 = 3;

function sumToOneDigit(num) {
  // Edge case
  if (isNaN(parseInt(num))) {
    return null;
  }
  // Base Case
  if (num < 10) {
    return num;
  }
  // Forward Progress / Logic
  var strNum = num.toString();
  var sum = 0;

  for (var strDigit of strNum) {
    sum += parseInt(strDigit);
  }

  return sumToOneDigit(sum);
}
