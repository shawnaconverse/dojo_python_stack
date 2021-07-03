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
  let length = str.length;
  if (length == 0) {
    return (newStr);
  }
  newStr = str.slice(length-1);
  return reverseStr(str);  
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

function sumToOneDigit(num) {
  let numToStr = num.toString();
  let length = numToStr.length;

  if (length <= 1) {
      return Number(numToStr);
  }
  else {
      addend1 = Number(numToStr[0]);
      let newNum = Number(numToStr.slice(1, length));
      return sumToOneDigit(addend1 + sumToOneDigit(newNum));
  }
}

