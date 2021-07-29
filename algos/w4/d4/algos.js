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
  // if (str.length === 0) return "";
  // if (str.length === 1) return str;
  if (str.length <= 1) return str;

  // return str[str.length - 1] + reverseStr(str.slice(0, str.length - 1))
  return reverseStr(str.slice(1)) + str[0]
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

const num4 = 57;
const expected4 = 3;

const num5 = 888;
const expected5 = 6;

const num7 = 9999;
const expected7 = 9;

const num6 = "hello there";
const expected6 = null;

function sumToOneDigit(num) {
  //Base case
  if (num.toString().length == 1){
    return num
  }
  let x = num.toString()[0];
  let y = num.toString()[1];
  let z = parseInt(x) + parseInt(y)
  // if (num.toString().length > 2 || z.toString().length == 2){
  if (num.toString().length >= 2){
    let str = z.toString() + num.toString().slice(2)
    return sumToOneDigit(parseInt(str))
  }
  return z 
}

function sumToOne(n) {
  if (isNaN(parseInt(n))) return null;

  // BASE CASE
  if (n < 10) return n;

  const strNum = n.toString();
  let sum = 0;

  for (const strDigit of strNum) {
    sum += parseInt(strDigit)
  }

  return sumToOne(sum);
}