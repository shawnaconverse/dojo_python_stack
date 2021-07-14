/* 
  Given a string,
  return a new string with the duplicates excluded
*/

const str1 = "abcABC";
const expected1 = "abcABC";

const str2 = "helloo";
const expected2 = "helo";

function stringDedupe(str) {
  var newStr="";
  for(let i = 0; i<str.length; i++){
      if(newStr.indexOf(str[i])==-1){
          newStr+=str[i];
      }
  }
  return newStr
}

/*****************************************************************************/

/* 
  Given a string containing space separated words
  Reverse each word in the string.
  If you need to, use .split to start, then try to do it without.
*/

const str1 = "hello";
const expected1 = "olleh";

const str2 = "hello world";
const expected2 = "olleh dlrow";

const str3 = "abc def ghi";
const expected3 = "cba fed ihg";

function reverseWords(str) {//with split
  const myArr = str.split(" ");
  let newStr="";
  for(let i = 0; i<myArr.length; i++){
      newStr+=reverseHelper(myArr[i])+" "
  }
  return newStr;

}
function reverseWords(str){//without split
  let newStr = "",temp="";
  for(let i = 0; i<str.length; i++){
      if(str[i]!=" "){
          temp+=str[i];
      }
      else{
          newStr+=reverseHelper(temp)+" "
          temp=""
      }
    }
  return newStr.length==0? reverseHelper(temp):newStr+reverseHelper(temp);
}
function reverseHelper(str) {//helper Function
  var temp = "";
  for(var i = str.length-1; i>-1; i--){
      temp += str[i];
  }
  return temp;
}

// --------------------------------------------
function reverseStr(s) {
  let output = '';
  for (let i = s.length - 1; i >= 0; i--)
      output += s[i];
  return output;
}


function reverseWords(str) {
  let token = ""
  let reversedWords = []
  for (let i = 0; i < str.length; i++){
      if (str[i] != " "){
          token += str[i]
      } else {
          reversed_word = reverseStr(token)
          reversedWords.push(reversed_word + " ")
          token = ""
      }
  }
  reversed_word = reverseStr(token)
  reversedWords.push(reversed_word)
  return reversedWords.join("")
}

console.log(reverseWords(str1))
console.log(reverseWords(str2))
console.log(reverseWords(str3))