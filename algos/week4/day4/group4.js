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
  if (str.length == 0) {
    return str;
  }
  str.slice(str.length - 1);
  return str.slice(str.length - 1) + reverseStr(str.slice(0, str.length - 1));
}
console.log(reverseStr(str1));

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

const num3 = 25347;
const expected3 = 3;

function sumToOneDigit(num) {
  if (isNaN(num)) {
    return "not a number";
  }
  if (num < 10) {
    return num;
  }
  var str = num.toString;
  var sum = 0;
  if (str.length % 2 == 0) {
    for (var i = 0; i < str.length; i += 2) {
      sum += str.slice(i, i + 1) + str.slice(i + 1, i + 2);
    }
  } else {
    for (var i = 0; i < str.length; i += 2) {
      sum += str.slice(i, i + 1) + str.slice(i + 1, i + 2);
    }
    sum += str.slice(str.length - 1);
  }
  return sum + sumToOneDigit(sum);
}

sumToOneDigit(num3);
