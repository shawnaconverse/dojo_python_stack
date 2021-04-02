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


function isAnagram(s1, s2) {
    // Use some form or frequecy table
    var str1 = s1.toUpperCase();
    var str2 = s2.toUpperCase();

    if (str1.length !==  str2.length) {
        return false;
    }
    var freq = {};
    for (let i = 0; i < str1.length; i++) {
        let char = str1[i];
        freq[char] = freq[char] ? freq[char] += 1 : freq[char] = 1;
    }

    for (let i = 0; i < str2.length; i++) {
        let char = str2[i];
        if (!freq[char]) {
            return false;
        } else {
            freq[char] = -1;
        }
    }
    return true;
}

console.log(isAnagram(strA4, strB4));


function isAnagram(s1, s2) {
    var freqTable={};
    var str1 = s1.toLowerCase();
    var str2 = s2.toLowerCase();
    for (var i=0; i<str1.length; i++){
        var str = str1[i];
        if (freqTable.hasOwnProperty(str) === false) {
            freqTable[str] = 1
        } else {
            freqTable[str] ++;
        }
    }
    for (var j=0; j<str2.length; j++){
        var str = str2[j];
        if (freqTable.hasOwnProperty(str) === false){
            freqTable[str] =1
        } else {
            freqTable[str] --;
        }
    }
    for (item in freqTable){
        if (freqTable[item] != 0){
            return false;
        }
    }
    return true;    
}
console.log(isAnagram(strA4, strB4));


/*****************************************************************************/



/* 
    Given a string that may have extra spaces at the start and the end,
    return a new string that has the extra spaces at the start and the end trimmed (removed)
    do not remove any other spaces.
*/

// const str1 = "   hello world     ";
// const expected1 = "hello world";

// function trim(str) {}