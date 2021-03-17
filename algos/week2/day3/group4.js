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
    var freqTable = {},value;
    var str1;
    // WORK
    for (var i = 0; i < str.length; i++) {
        var str1 = str[i];
        if (freqTable.hasOwnProperty(str1) === false) {
            freqTable[str1] = 1;
        } else {
            freqTable[str1]++;
        }
    }
    var new_str = '';
    for(var key in freqTable)
    {
        new_str += key;
    }
    // RETURN
    return new_str;
}

console.log(stringDedupe(str1));
console.log(stringDedupe(str2));

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


function reverseWords(str) {}