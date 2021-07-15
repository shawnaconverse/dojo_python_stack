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

// --------------------------------
function rotateStr(str, n) {
  var newstr = '';
  for(var i = str.length - n; i < str.length; i++){
    newstr += str[i];
  }
  for (var i = 0; i < str.length - n; i++){
    newstr += str[i];
  }
  return newstr;
}
rotateStr(str1, rotateAmnt1)

// -----------------------------------
function reverseStr(charArr, left, right) {
  while (left < right){
      [charArr[left], charArr[right]] = [charArr[right], charArr[left]]  
      left ++ 
      right --
  }
  return charArr
}

function rotateStr(str, n) {
  let strLength = str.length;
  strArr = str.split("")
  rotatedStr = reverseStr(strArr, 0, strLength - 1)
  rotatedStr = reverseStr(strArr, 0, n - 1)
  rotatedStr = reverseStr(strArr, n, strLength - 1)
  return rotatedStr.join("");
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



// -------
function isRotation(s1, s2) {
  let s1Len = s1.length;
  // if S1 == S2, no ratation
  if (s1 == s2) return false;
  
  while (s1Len){
      if (rotateStr(s1, s1Len) == s2){
          return true;
      }
      s1Len --
  }
  return false;
}
