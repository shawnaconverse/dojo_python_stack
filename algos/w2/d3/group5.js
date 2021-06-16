/* 
  Given a string,
  return a new string with the duplicates excluded
*/

const str1 = "abcABC";
const expected1 = "abcABC";

const str2 = "helloo";
const expected2 = "helo";

const str3 = "aabbccabc"
const expected3 = "abc"

function stringDedupe(str) {
  var newStr = "";
  for (var i = 0; i < str.length; i++) {
    if (str[i] != str[i + 1]) {
      newStr += str[i];
    } else continue;
  }
  return newStr;
}
console.log(stringDedupe(str2));

/*****************************************************************************/

function reverseWords(str) {
  var newStr =''
  var word = ''
  
}


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

function reverseWords(str)
{
    var word = "";
    var newStr = "";
    for(var i = str.length - 1; i >= 0; i--) {
        if (str[i] == " ") {
            newStr = " " + word + newStr;
            word = "";
        }
        else {
            word += str[i];
        }
    }
    return word + newStr;
}
console.log(reverseWords(str3))