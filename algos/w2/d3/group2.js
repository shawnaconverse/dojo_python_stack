/* 
  Given a string,
  return a new string with the duplicates excluded
*/

const str1 = "abcABC";
const expected1 = "abcABC";

const str2 = "helloo";
const expected2 = "helo";

function stringDedupe(str) {
  let obj = {};
  let deDupe = "";
  for (let letter of str) {
    if (!obj.hasOwnProperty(letter)) {
      obj[letter] = 1;
    }
  }
  for (let key in obj) {
    deDupe += key;
  }
  return deDupe;
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
  let reversed = "";
  let word = "";
  for (let index = 0; index <= str.length; index++) {
    if (str[index] == " ") {
      reversed += word + " ";
      word = "";
    } 
    else if (index == str.length) {
      reversed += word; 
    } else {
      word = str[index] + word;
    }
  }
  return reversed;
}
