/* 
  Given a string,
  return a new string with the duplicates excluded
*/

const str1 = "abcABC";
const expected1 = "abcABC";

const str2 = "helloo";
const expected2 = "helo";


const str1 = "abcABC";
const expected1 = "abcABC";

const str2 = "helloo";
const expected2 = "helo";

function stringDedupe(str) {
    var newString = ""
    for(var i = 0; i < str.length ;i++) {
        newString.indexOf(str[i]) === -1 ? newString += str[i] : '';
    }
    return newString
}

console.log(stringDedupe(str1))
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

function reverseWords(str) {
    return str.split(' ');
    for (var i = str.length - 1; i >= 0; i++) {
        str.reverse(str[i])
    }
    return reverseWords(str["hello", "hello world", "abc def ghi"]);
}
console.log(str1);
console.log(str2);
console.log(str3);
