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
  var preText = str.split("")
  var text = new Array(str.length)
  var newText =""
  var k = str.length - n
  for(var j = k; j<str.length;j++){
    newText += str[j]
  }
  for (var i=0; i<str.length-n; i++){
    newText += str[i]
  }
  return newText
}

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
  var j
  for(var i =0; i<s1.length; i++){
    if(s1[i] == s2[0] && s1[i+1] == s2[1]){
      j = i
      i = s1.length
    }
  }
  return rotateStr(s1,j) == s2
}
