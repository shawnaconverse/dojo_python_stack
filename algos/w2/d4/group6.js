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
  let arr = str.split("");
  for(let i = str.length-1; i>=str.length-n; i--){ //start at end of array and go for n times
    arr.unshift(arr.pop());     // pop from end of array and unshift to beginning

  }
  return (arr.join(""));
}
imstealing
//Better Effiancy O(n) depending on the big O of substring
function rotateStr2(str,n){
  let answer = "";
  for(let i = str.length-1; i>= str.length-n;i--){
      answer = str[i]+answer;
  }
  answer += str.substring(0,str.length-n);
  return answer;
}

console.log(rotateStr2(str3,2));

const strA1 = "ABCD";
const strB1 = "CDAB";
const expected1 = true;
// Explanation: if you start from A in the 2nd string, the letters are in the same order, just rotated

const strA2 = "ABCD";
const strB2 = "CDBA";
const expected2 = false;
// Explanation: all same letters in 2nd string, but out of order

function isRotation(s1, s2) {
  for(let i = 0; i < s1.length; i++){    //go through the length of the string
    let str = rotateStr(s1, i);           //check each rotation and compare to original string
    if (str == s2){     //found a match end loop return true
     return true;
    }  
  } 
  return false;     //no matches found
}
