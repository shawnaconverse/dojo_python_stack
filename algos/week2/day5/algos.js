/* 
    An anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
    typically using all the original letters exactly once.
    Is there a quick way to determine if they aren't an anagram before spending more time?
    Given two strings
    return whether or not they are anagrams
*/

const strA1 = "yes";
const strB1 = "eys";
const expected1 = true;

const strA2 = "yes";
const strB2 = "eYs";
const expected2 = true;

const strA3 = "no";
const strB3 = "noo";
const expected3 = false;

const strA4 = "silent";
const strB4 = "listen";
const expected4 = true;

// input strings can be mixed capital or lowercase.
// "Y" === "y" => false
// strA2.toUpperCase()
// In Python we use ==
// The JS equivalent is: ===
// "42" == 42 => true
// "42" === 42 => falset
function isAnagram(s1, s2) {
    if (s1.length !== s2.length) {
        return false;
    }
    // Use some form or frequecy table
    s1CharFreq = {};
    s2CharFreq = {};
    
    // build both tables in the same loop since the lengths are equal
    for (var i = 0; i < s1.length; i++) {
        var s1Char = s1[i].toUpperCase();
        var s2Char = s2[i].toUpperCase();
        
        
        if (s1CharFreq.hasOwnProperty(s1Char) == false) {
            s1CharFreq[s1Char] = 1;
        } else {
            s1CharFreq[s1Char]++;
        }
        
        if (s2CharFreq.hasOwnProperty(s2Char) == false) {
            s2CharFreq[s2Char] = 1;
        } else {
            s2CharFreq[s2Char]++;
        }
    }

    // compare both frequency tables
    // compare the count
    for (var char in s1CharFreq) {
        if (!s2CharFreq.hasOwnProperty(char)) { // if the char does NOT exist in s2CharFreq
            return false;
        }

        if (s1CharFreq[char] !== s2CharFreq[char]) { // comparing the count in each object
            return false;
        }
    }
    return true;
}


/*****************************************************************************/



/* 
    Given a string that may have extra spaces at the start and the end,
    return a new string that has the extra spaces at the start and the end trimmed (removed)
    do not remove any other spaces.
*/

const str1 = "   hello world     ";
const expected1 = "hello world";

function trim(str) {
    // JS there are Truthy and Falsey comparisons
    // " " === false
    // str[i] === " "
    // "a" === true
    var startIdx = 0;
    var endIdx = str.length - 1;

    // loose comparison to false
    // works for spaces and other space like characters
    while (str[startIdx] == false) {
        startIdx++;
    }

    while (str[endIdx] == false) {
        endIdx--;
    }

    return str.slice(startIdx, endIdx + 1);
}