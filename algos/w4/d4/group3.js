/* 
  Recursively reverse a string
  helpful methods:
  str.slice(beginIndex[, endIndex])
  returns a new string from beginIndex to endIndex exclusive
*/

function reverseStr(str) {
  // EDGE CASE
  if (str.length == 0) return ""

  // BASE CASE
  if (str.length == 1) return str[0]

  // FORWARD PROGRESS AND RECURSIVE CALL
  return str[str.length - 1] + reverseStr(str.slice(0, str.length - 1))
}

const str1 = "abc";
const expected1 = "cba";

const str2 = "";
const expected2 = "";



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
function sumToOneDigit(num) {
  // EDGE CASE
  if (parseInt(num) == NaN) return null 

  // BASE CASE
  if (num < 10) return num

  // FORWARD PROGRESS & RECURSIVE CALL
  num = num.toString()
  strArr = num.split("")
  last_digit = strArr[strArr.length-1] // string '8'
  strArr.pop() // strArr = ['3']
  if (parseInt(last_digit) + parseInt(sumToOneDigit(strArr)) < 10){
      return parseInt(last_digit) + parseInt(sumToOneDigit(strArr)) // return 8 + parseInt(['3'])
  }
  else {
      newArr = parseInt(last_digit) + parseInt(sumToOneDigit(strArr))
      console.log("here", parseInt(last_digit) + parseInt(sumToOneDigit(newArr)))
      strArr = strArr.toString() // ['1', '1']
      secondStrArr = strArr.split("")
      last_digit = secondStrArr[secondStrArr.length-1] // string '8'
      console.log("last_digit: " , last_digit)
      console.log("secondStrArr: " , secondStrArr)
      return parseInt(last_digit) + parseInt(sumToOneDigit(secondStrArr))
  }
}

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