/* 
    Given a string,
    return a new string with the duplicates excluded
    Bonus: Keep only the last instance of each character.
*/

const str1 = "abcABC";
const expected1 = "abcABC";

const str2 = "helloo";
const expected2 = "helo";
function stringDedupe(str) {
    // SETUP
    var disticntStr = "";
    var seen = {};
    // WORK
    // loop backwards just to include the last occurance
    for (var i = str.length - 1; i >= 0; i--) {
        // ! is a logical not
        // if str[i] not in seen - PYTHON
        if (!seen[str[i]]) {
            // appends distinctStr = distinctStr + str[i]
            // prepend add the current char before i add the rest of the string
            disticntStr = str[i] + disticntStr;
            seen[str[i]] = true;
        }
    }
    // RETURN
    return disticntStr;
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


function reverseWordsSplit(str) {
    // SETUP
    var words = str.split(" ");
    var wordsReversed = "";
    // WORK
    for (var word in words) {
        var reversedWord = "";

        for (var i = word.length - 1; i >= 0; i--) {
            reversedWord += word[i];
        }

        // add a space in front of the word if its not the first word
        if (wordsReversed.length  > 0) {
            reversedWord = " " + reversedWord;
        }
        wordsReversed += reversedWord;
    }
    // RETURN
    return wordsReversed;
}


function reverseWords(str) {
    // SETUP
    var reversedWord = "";
    var wordsReversed = "";
    // WORK
    for (var char of str) {
        if (char !== " ") {
            // prepend to reverse
            reversedWord = char + reversedWord;
        } else { // a space was found
            // add a space in front of the word if its not the first word
            if (wordsReversed.length  > 0) {
                reversedWord = " " + reversedWord;
            }
            
            wordsReversed += reversedWord;
            reversedWord = "";
        }
    }

    // last word wasn't added if there are no trailing spaces
    if (reversedWord.length > 0) {
        if (wordsReversed.length  > 0) {
            reversedWord = " " + reversedWord;
        }
        wordsReversed += reversedWord;
    }

    // RETURN
    return wordsReversed;
}

