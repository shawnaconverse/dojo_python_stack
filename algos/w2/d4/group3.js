/* 
  String: Rotate String
  Create a standalone function that accepts a string and an integer, and rotates the characters in the string to the right by that given integer amount.
*/

const nstr1 = "Hello World";
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
  var first = "";
  var second = "";
  for (var i = str.length - 1; i >= 0; i--) {
  	if(i>=str.length-n){
    first = str[i] + first;
    }
    else{
    	second = str[i] + second;
    }
  } 
  
  return first+second;
}
/*****************************************************************************/

/* 
  Create the function isRotation(str1,str2) that
  returns whether the second string is a rotation of the first.
*/

const strA1 = "ABCCD";
const strB1 = "CDABC";
const expected1 = true;
// Explanation: if you start from A in the 2nd string, the letters are in the same order, just rotated

const strA2 = "ABCD";
const strB2 = "CDBA";
const expected2 = false;
// Explanation: all same letters in 2nd string, but out of order

const strA3 = "ABCDA";
const strB3 = "DAABC";
const expected3 = true;

function isRotation(s1, s2) {
  if(s1.length!=s2.length){
    return false;
  }
  var foundMismatch = false;
  for(let i = 0; i<s1.length;i++){
    if(s1[i]===s2[0]){

      for(var j = 0;j<s2.length;j++){
        if(s1[(i+j)%s1.length]!==s2[j]){
          foundMismatch = true
          break
        }
      }
      if (!foundMismatch){
        return true
      }
    }
  }
  return false

}
console.log(isRotation(strA1,strB1))
console.log(isRotation(strA3,strB3))