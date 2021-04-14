/* 
  Given a string,
  return a new string with the duplicates excluded
*/

const str1 = "abcABC";
const expected1 = "abcABC";

const str2 = "helloo";
const expected2 = "helo";

function stringDedupe(str) {
  // SETUP
  var distictStr = "";
  var seen = {};

  // WORK
  // include the last occurance of the duplicate character
  // "heleolo" => helo
  for (var i = str.length - 1; i >= 0; i--) {
    if (!seen[str[i]]) {
      distictStr = str[i] + distictStr;
      seen[str[i]] = true;
    }
  }

  // RETURN
  return distictStr;
}

/*****************************************************************************/

/* c
  Given a string contai{}ning space separated words
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

    // add a space in front of the word if it's not the first word
    if (wordsReversed.length > 0) {
      reversedWord = " " + reversedWord;
    }

    wordsReversed += reversedWord;
  }

  // RETURN
  return wordsReversed;
}
