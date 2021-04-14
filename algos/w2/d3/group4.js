/* 
  Given a string,
  return a new string with the duplicates excluded
*/

const str1 = "abcABC";
const expected1 = "abcABC";

const str2 = "helloo";
const expected2 = "helo";

function stringDedupe(str) {
    var stringMap = {};
    var ch, count;
    var newString = "";
    // Loop through the string...
    for (var i = 0; i < str.length; i++) {
        // Get this character
        ch = str.charAt(i);
        // Get the count for it, if we have encountered the character already
        count = stringMap[ch]; 
        // If count for that char is greater than 0, store that count plus one; if not, store one
        stringMap[ch] = count ? count + 1 : 1;
    }
    // Loop through the map and construct the new string
    for (ch in stringMap) {
        newString += ch ;
    }
    return newString;
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
  return str.split("").reverse().join("").split(" ").reverse().join(" ")
}

console.log(reverseWords(str1))
console.log(reverseWords(str2))
console.log(reverseWords(str3))