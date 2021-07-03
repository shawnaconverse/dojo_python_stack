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
    if (str === "") {
      return "";
    } else{
      return reverseStr(str.substr(1)) + str.charAt(0);
    }
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

const num3 = 25;["2","5"]
const expected3 = 7;

const num2 = 3.5;
const expected2 = 1;

function sumToOneDigit(num) {
  let sum = 0;
  let numbers = num.toString().split('');
  
  while(numbers.length > 0){
    sum += parseInt(numbers[0],10); // the 10 will convert from a decimal number // parseInt(string, radix)
    numbers.splice(0,1); // (index, howmany, item)
    sumToOneDigit(numbers.join(''));
  }
   return sum;
  }



