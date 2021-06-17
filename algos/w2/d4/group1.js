/* 
  String: Rotate String
  Create a standalone function that accepts a string and an integer, and rotates the characters in the string to the right by that given integer amount.
*/

const str1 = "Hello World";
const rotateAmnt1 = 0;
const expected1 = "Hello World";

const str2 = "Hello World";
const rotateAmnt2 = 1;
const expected2 = "dHello Worl";

const str3 = "Hello World";
const rotateAmnt3 = 2;
const expected3 = "ldHello Wor";

const str4 = "Hello World";
const rotateAmnt4 = 4;
const expected4 = "orldHello W";

function rotateStr(str, n) {
  var newStr = "";
  for (var i = str.length - n; i < str.length; i++) {
    newStr += str[i];
  }
  for (var i = 0; i < str.length - n; i++) {
    newStr += str[i];
  }
  return newStr;
}
console.log(rotateStr(str4, 4));

/*****************************************************************************/

/* 
  Create the function isRotation(str1,str2) that
  returns whether the second string is a rotation of the first.
*/

const strA1 = "ABCD";
const strB1 = "CDAB";
const expected1 = true;
// Explanation: if you start from A in the 2nd string, the letters are in the same order, just rotated

const strA2 = "ABCD";
const strB2 = "CDBA";
const expected2 = false;
// Explanation: all same letters in 2nd string, but out of order

function isRotation(s1, s2) {
  var rotate = "";
  for (var n = 0; n < s1.length; n++) {
    for (var j = s1.length - n; j < s1.length; j++) {
      rotate += s1[j];
      console.log(rotate);
    }
    for (var j = 0; j < s1.length - n; j++) {
      rotate += s1[j];
      console.log(rotate);
    }
    return rotate;
  }
}

isRotation(strA2, strB2);

// Taking in str a and b
// Loop through str a and ROTATE at every kind of index
// if check to see if a and b match
// if they match at ALL return true
