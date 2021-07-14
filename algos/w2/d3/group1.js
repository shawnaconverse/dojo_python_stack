/* 
  Given a string,
  return a new string with the duplicates excluded
*/

const str1 = "abcABC";
const expected1 = "abcABC";

const str2 = "helloo";
const expected2 = "helo";

function stringDedupe(str) {
  var deduped = str[0] 
  for (var i = 1; i < str.length; i++){
    if (str[i] != str[i-1]){
      deduped += str[i]
    }
  }
  return deduped
}

console.log(stringDedupe(str2))




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

const str1 = "hello";
const expected1 = "olleh";

const str2 = "hello world";
const expected2 = "olleh dlrow";

const str3 = "abc def ghi";
const expected3 = "cba fed ihg";

function reverseWords(str) {
  var preSpaceText = []
  var reverseWordsString = ""
  var preText = ""
  for(var i = 0; i < str.length; i++){
    if(str[i] == " " || i == str.length-1){
      if(i == str.length-1){
        preSpaceText.push(str[i])
        preSpaceText.push(" ")
      }
      preSpaceText.reverse()
      preText = preSpaceText.join("")
      console.log(preText)
      reverseWordsString+=(preText)
      preSpaceText = []
    }
    else{
      preSpaceText.push(str[i])
    }
  }
  return reverseWordsString
}
console.log(reverseWords(str2))

