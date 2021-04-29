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
  if (str === "")
      return "";
  else
  return reverseStr(str.substring(1)) + str.charAt(0);
}

console.log(reverseStr(str1))
console.log(reverseStr(str2))


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

function sumToOneDigit(num) {
  // BASE CASE
  if (num <= 9) return num;
  if (typeof(num) != "number" ) return null

  return sumToOneDigit(num%10 + Math.floor(sumToOneDigit((num/10))));
}
console.log (sumToOneDigit(num1))

console.log (sumToOneDigit(num2))
console.log (sumToOneDigit(num3))
console.log (sumToOneDigit(num4))
console.log (sumToOneDigit(num5))