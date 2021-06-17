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

//SOLUTION 1
function rotateStr(str, n) {
  word = '';
  front = str.slice(-1 * n);
  new_word = '';
  for (var i = 0; i < str.length - n; i++){
      word += str[i]
  }
  new_word = front + word
  console.log(new_word)
}
rotateStr(str1, rotateAmnt1)
rotateStr(str2, rotateAmnt2)
rotateStr(str3, rotateAmnt3)
rotateStr(str4, rotateAmnt4)

//SOLUTION 2
function rotateStr(str, n) {
  var last_letter='';
  var front_end=''
  
  for (var times=0; times<n;times++) {
    last_letter=str[str.length-1];
    for (var i=0; i<str.length-1;i++) {
      front_end+=str[i];
    }
    str = last_letter + front_end;
    last_letter='';
    front_end='';
  }
  return str
}
console.log(rotateStr(str1,rotateAmnt1))
console.log(rotateStr(str2,rotateAmnt2))
console.log(rotateStr(str3,rotateAmnt3))
console.log(rotateStr(str4,rotateAmnt4))
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

const strA3 = "ABCDA";
const strB3 = "CDAAB";


function isRotation(s1, s2) {
  if (s1.length != s2.length) {
    return false
  } else {
    // leave s1, rotate s2 n times or n=s1.length-1
    // reset s2 to each rotate and compare values to s1
    var last_letter='';
    var front_end='';

    for (var i=0;i<s2.length-1;i++) {
      last_letter=s2[s2.length-1];
      for (var j=0; j<s2.length-1;j++) {
        front_end+=s2[j];
      }
      s2 = last_letter + front_end;
      if (s1==s2) {
        return true
      }
      last_letter='';
      front_end='';
    }
    return false
  }
}
console.log(isRotation(strA1, strB1))
console.log(isRotation(strA2, strB2))
console.log(isRotation(strA3, strB3))