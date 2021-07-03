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
  let first_temp = "";
  for (let i = str.length - 1; i >= str.length - 1 - n; i--)  {
    first_temp += str[i];
  }
  for (let j = 0; j < str.length - 1 - n; j++)  {
    first_temp += 
  }
}

function rotateStr(str, n) {
  if (n>=str.length){
      n=n%str.length;
  }
  if(n<1){
      return str
  }
  let result='';
  let start='';
  for (let i=0; i<str.length; i++){
      if(i<str.length-n){
          result+=str[i];
      } else {
          start+=str[i];
      }
  }
  return start+result;
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

const strA = "ABCD"
const strB = "DABC"

const strA2 = "ABCD";
const strB2 = "CDBA";
const expected2 = false;
// Explanation: all same letters in 2nd string, but out of order

function isRotation(s1, s2) {
  for(let i=0; i<s2.length; i++){
    if(s1[0]==s2[i]
      && rotateStr(s1, i)==s2){
        return true;     
    }
  }
  return false;
}

function isRotation(s1, s2) {
  for(let i=0; i<s2.length; i++){
    if(s1[0]==s2[i]){
      for(let j=1; j<s1.length; j++){
        let k=i+j
        if(i+j>=str.length){
          k-=str.length;
        }
        if()
      }     
    }
  }
  return false;
}
