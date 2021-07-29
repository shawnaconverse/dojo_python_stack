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
  //Base Case
  if (str.length < 2){
    return str
  }
  let newStr = str.slice(0, 1)
  return reverseStr(str.slice(1, str.length)) + newStr
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
  //Base case
  if (num.toString().length == 1){
    return num
  }
  let x = num.toString()[0];
  let y = num.toString()[1];
  let z = parseInt(x) + parseInt(y)
  if (num.toString().length >= 2){
    let str = z.toString() + num.toString().slice(2)
    return sumToOneDigit(parseInt(str))
  }
  return z 
}

console.log(sumToOneDigit(num3))