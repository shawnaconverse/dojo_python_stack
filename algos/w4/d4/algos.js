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
  if (str.length === 0) return "";
  if (str.length === 1) return str;

  return str[str.length - 1] + reverseStr(str.slice(0, str.length - 1));
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

const num4 = 49;
const expected4 = 4;

function sumToOneDigit(num) {
  num = num.toString();
  let result = 0;
  if (isNaN(parseInt(num)) || parseInt(num) < 0) {
    return NaN;
  }
  if (num.length === 1) {
    return parseInt(num);
  }
  for (let digit of num) {
    result += parseInt(digit);
  }
  return sumToOneDigit(result);
}

function sumToOneDigit(num) {
  if (!parseInt(num)) {
    return null;
  }
  //If we modulus the number by 10 and we get the same number, it must be a single digit number
  if (num % 10 == num) {
    return num;
  }
  if (num < 0) {
    return null;
  }
  let newnum = 0;

  //Loops through the number, sums the one's digit into newnum and removes the one's digit from num.
  //When we truncate the one's digit from a 1-digit number, it'll be 0, so that's the end condition for the loop
  while (num > 0) {
    //Retrieves the value of the 1's place and adds it to newnum. Example:
    newnum += num % 10;

    //Truncates the one's digit from num. Example: 812. 812/10 would be 81.2, but since we Math.floor, the result would be 81 and we store that in num. The 1's digit is gone. Magic.
    num = Math.floor(num / 10);
  }

  return sumToOneDigit(newnum);
}
