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
  // Base Case
  if (str === "") return "";
  // Forward Progress
  // Recursive Call
  const strLessFirst = str.slice(1);
  return reverseStr(strLessFirst) + str[0];
}

/*****************************************************************************/

/*
  Sum To One Digit
  Implement a function sumToOne(num)​ that,
  given a number, sums that number’s digits
  repeatedly until the sum is only one digit. Return
  that final one digit result.
 e Tips:
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

function sumToOneDigit(num) {
  // EDGE CASE
  if (isNaN(num)) return null;

  // BASE CASE  
  if (num < 10) return num;

  const strNum = num.toString();
  let sum = 0;

  for (const strDigit of strNum) {
    sum += parseInt(strDigit);
  }

  return sumToOneDigit(sum)
}
