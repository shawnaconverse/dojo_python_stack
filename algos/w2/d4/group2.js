/* 
  String: Rotate String
  Create a standalone function that accepts a string and an integer, and rotates the characters in the string to the right by that given integer amount.
*/

const str1 = "Hello World";
/*const rotateAmnt1 = 0;
const expected1 = "Hello World";

 const str2 = "Hello World";
const rotateAmnt2 = 1;
const expected2 = "dHello Worl";

const str3 = "Hello World";
const rotateAmnt3 = 2;
const expected3 = "ldHello Wor";

const str4 = "Hello World";
const rotateAmnt4 = 4;
const expected4 = "orldHello W"; */

function rotateStr(str, n) {
  var newStr = "";
  for (var i = str.length - n; i < str.length; i++) {
    newStr += str[i]
  }
  for (var j = 0; j < str.length - n ; j++) {
    newStr += str[j]
  }
  return newStr
}

rotateStr(str1, 0)
rotateStr(str1, 1)
rotateStr(str1, 2)
rotateStr(str1, 4)


/*****************************************************************************/

/* 
  Create the function isRotation(str1,str2) that
  returns whether the second string is a rotation of the first.
*/

const strA1 = "ABCDE";
const strB1 = "CDEAB";
// const expected1 = true;
// Explanation: if you start from A in the 2nd string, the letters are in the same order, just rotated

// const strA2 = "ABCD";
// const strB2 = "CDBA";
// const expected2 = false;
// Explanation: all same letters in 2nd string, but out of order

function isRotation(s1, s2) {
  var newStr = "";
  for (var i = s1.length/2; i < s1.length; i++) {
    console.log(s1[i])
    newStr += s1[i]
  }
  for (var j = 0; j < s1.length/2 ; j++) {
// works if not odd length && this case    newStr += s1[j]
  }
  if (newStr === s2) {
    return true;
  }
  else {
    return false
  }
}

isRotation(strA1, strB1)