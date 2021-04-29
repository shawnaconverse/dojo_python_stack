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

function reverseStr(str, revStr = ""){
  if (str.length === 0) return revStr
  revStr+=str.slice(str.length-1, str.length)
  str = str.slice(0, str.length-1)
  return reverseStr(str, revStr)
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

const num4 = 38;
const expected4 = 2;

const num5 = "dog"
const expected5 = null;

function sumToOneDigit(num, sum = 0) {
  if (!num){
    if (sum > 9){
      sumToOneDigit(sum)
    } else {
      return sum
    }
  } 
  if (isNaN(num)) return null
  num = num.toString()
  sum += parseInt(num.slice(num.length-1, num.length))
  num = parseInt(num.slice(0, num.length-1))
  return sumToOneDigit(num, sum)
}

console.log(sumToOneDigit(num1))
console.log(sumToOneDigit(num2))
console.log(sumToOneDigit(num3))
console.log(sumToOneDigit(num4))
console.log(sumToOneDigit(num5))
