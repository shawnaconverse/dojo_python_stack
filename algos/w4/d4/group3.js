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

function reverseStr( str ) {

  return str ? reverseStr( str.substr( 1 ) ) + str[ 0 ] : str;
}
console.log( reverseStr( str1 ) )
/*
possible second answer....

function reverseStr(str) {
  var splitString = str.split("");
  var reverseArray = splitString.reverse();
  var joinArray = reverseArray.join("");
  return joinArray;
}
console.log("string 1 = " + reverseStr(str1))
console.log("string 2 = " + reverseStr(str2))
*/
  // Base Case
  // Forward Progress
  // Recursive Calli
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

function sumToOneDigit(num) {}

// what happens if the input number was 3, 4, 1000 digits long? - Shawn
function sumToOneDigit(num) {
  return num.toString().split("").reduce(function(a, b){
    return parseInt(a) + parseInt(b);
  });
}

console.log(sumToOneDigit(5)); 
console.log(sumToOneDigit(10));
console.log(sumToOneDigit(25));

