/* 
  Recursively reverse a string
  helpful methods:
  str.slice(beginIndex[, endIndex])
  returns a new string from beginIndex to endIndex exclusive
*/

const str1 = "abc";
// const expected1 = "cba";

// const str2 = "";
// const expected2 = "";

/* function reverseStr(str) {
  let reversed = "";

  // Base Case
  if (str.length < 2) {
    return str;
  
  // Forward Progress
  // Recursive Call
  reversed += reverseStr(str.split(),str.slice(str[0], str.length),str.join())
  
  return reversed;
}

reverseStr(str1) */

function reverseStr(str) {
  if (str === "")
    return "";
  else
    return reverseStr(str.substr(1)) + str.charAt(0);
}

reverseStr(str2)

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

const num4 = 38; /* *8+3=11 which isn't 2 digits, so you ahve add 1+1 to get 2 */
const expected4 = 2;

function sumToOneDigit(num) {
  // Base Case
  if (parseInt(num) < 9) {
    return num;
  }

  // Forward Progress
  // Recursive Call


}
