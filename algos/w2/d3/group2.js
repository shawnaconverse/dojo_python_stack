/* 
  Given a string,
  return a new string with the duplicates excluded
*/

const str1 = "abcABC";
const expected1 = "abcABC";

const str2 = "helloo";
const expected2 = "helo";

function stringDedupe(str) {
  // setup
  let newString = "";// this string will copy value once

  //Work
  if(str.length < 1){
    return "";
  }
  for(var i = 0; i < str.length; i++){
    // if the new string already contains the character
    if(newString.includes(str[i])){
      // don't copy
    }
    else{
      // Else the string does not contain the copy so concatonate
      newString = newString + str[i];
    }
  }
  // return
  return newString;
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

function reverseWords(str) {
  //Setup
  const myArr = wordStr.split(" "); //make array to split strings
  let newString = ""; 
  let finalString = "";

  //Work
  //Loop thru array of strings
for(var i = 0; i < myArr.length; i++){
  //loop for each string of the array
  for(var j = myArr.length-1; j >= 0; j--){
    newString = newString + myArr[i][j]; //store all the characters in reverse
  }
  //Store all reversed strings into final string to display final result
  finalString += newString + " ";
  newString = "";
  }
  return finalString;
}

console.log(reverseWords(strBot1));
console.log(reverseWords(strBot2));
console.log(reverseWords(strBot3));