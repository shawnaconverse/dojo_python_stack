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
  if (str.length < 2) return str;

  return str[str.length-1] + reverseStr(str.slice(0,str.length-1))

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

const num3 = 254;
const expected3 = 7;

function sumToOneDigit(num) {
  if (isNaN(num)) return NaN; 
  if (num < 10) return num;

  num = num.toString()
  var sum = 0
  for (var i = 0; i < num.length; i++){
    sum += parseInt(num[i])
  }
  return sumToOneDigit(sum)
}
4