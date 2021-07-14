/* 
  Given a string,
  return a new string with the duplicates excluded
*/

const str1 = "abcABC";
const expected1 = "abcABC";

const str2 = "helloo";
const expected2 = "helo";

const str3 = "parallel";
const expected3 = "parle";

function stringDedupe(str) {
  // var - variable is global when declared in expressions, not functions
  // let - variable is only in the scope it is declared
  // const - scope is same as let, but variable cannot be reassigned
  // SETUP
  let distinctStr = "";
  const seen = {};

  // WORK
  for (let i = 0; i < str.length; i++) {
    // if str[i] key is in the seen object, then it returns the value === true
    // if str[i] key is not in the seen object, then it returns undefined === false
    if (!seen[str[i]]) {
      distinctStr += str[i];
      seen[str[i]] = true;
    }
  }

  // RETURN
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
  const words = str.split(" ");
  let wordsReversed = "";

  // WORK
  // in will give me the index numbers for an array, the keys for an object
  // of will give me the actual values
  for (const word in words) {
    let reversedWord = "";

    for (let i = word.length; i >= 0; i--) {
      reverseWord += word[i];
    }

    // add a space in front of the word if its not the first word
    if (wordsReversed.length > 0) {
      // when we see an = we are assigning or reassining a variable
        // reversedWord is going to be overwritten with whatever is on the right side of =
      
      reversedWord = " " + reversedWord;
    }

    wordsReversed += reversedWord;
  }

  // RETURN
  return wordsReversed;
}
