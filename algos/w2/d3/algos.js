/* 
  Given a string,
  return a new string with the duplicates excluded
*/

const str1 = "abcABC";
const expected1 = "abcABC";

const str2 = "helloo";
const expected2 = "helo";

const str3 = "adgatedtdyaopw";
const expected3 = "adgteyopw";

function stringDedupe(str) {
  var seen = {};
  var distinctStr = "";

  for (var i = 0; i < str.length; i++) {
    if (!seen[str[i]]) {
      distinctStr += str[i];
      seen[str[i]] = true;
    }
  }

  return distinctStr;
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
  // SETUP
  var words = str.split(" ");
  var wordsReversed = "";

  // WORK
  for (var word of words) {
    var reversedWord = "";

    for (var i = word.length - 1; i >= 0; i--) {
      reversedWord += word[i];
    }

    // add a space in front of reversedWord only if its not the first word
    if (wordsReversed.length > 0) {
      reversedWord = " " + reversedWord;
    }

    wordsReversed += reversedWord;
  }

  // RETURN
  return wordsReversed;
}
