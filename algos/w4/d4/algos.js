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
  // BASE CASE - EDGE CASE
  if (str.length < 2) return str;
  // FORWARD PROGRESS
  // RECURSIVE CALL
  var strLessFirst = str.slice(1);
  return reverseStr(strLessFirst) + str[0]
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

const num4 = 38;
const expected4 = 2;

const num5 = "dog"
const expected5 = null;

function sumToOneDigit(num) {
  // EDGE CASE
  if (isNaN(parseInt(num))) return null; 

  // BASE CASE
  if (num < 10) return num;

  // FORWARD PROGRESS / WORK
  var strNum = num.toString();
  var sum = 0;

  for (var strDigit of strNum) {
    sum += parseInt(strDigit);
  }

  // RECURSIVE CALL
  return sumToOneDigit(sum)
}
