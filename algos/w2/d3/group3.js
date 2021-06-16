/* 
  Given a string,
  return a new string with the duplicates excluded
*/

const str1 = "abcABC";
const expected1 = "abcABC";

const str2 = "helloo";
const expected2 = "helo";

function stringDedupe(str) {
  var dict = {};
  var s = "";
  for (var i = 0; i < str.length; i++) {
    if (!dict[str[i]]) {
      dict[str[i]] = 1;
      s += str[i];
    }
  }
  return s;
}
function stringDedupeTwoLoops(str) {
  var str2 = "";
  var nondup = false;

  for (var i = 0; i < str.length; i++) {
    for (var j = 0; j < str.length; j++) {
      if(i==j){
        
        break;
      }
      if(str[j]==str[i]){
        nondup = true;
      }
    }
    if(nondup == false){
      str2+=str[i]
    }
    else{
      nondup = false;
    }
  }
  return str2;
}

console.log(stringDedupe(str1));
console.log(stringDedupe(str2));
console.log(stringDedupeTwoLoops(str1));
console.log(stringDedupeTwoLoops(str2));
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
  var mainstring = "";
  var substring = "";
  for (var i = str.length - 1; i >= 0; i--) {
    if (str[i] == " ") {
      mainstring = substring + " " + mainstring;
      substring = "";
    } else {
      substring += str[i];
    }
  }
  mainstring = substring + " " + mainstring;
  return mainstring;
}
console.log(reverseWords(str1));
console.log(reverseWords(str2));
console.log(reverseWords(str3));
