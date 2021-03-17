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
    var freqTable = {};
    for(var i=0; i<str.length; i++){
        var arr = str[i];
        if(freqTable.hasOwnProperty(arr)===false){
            freqTable[arr] = 1;
    } else { freqTable[arr]++
}
    }
    return freqTable;
}
console.log(stringDedupe("helloo"))


function frequencyTableBuilder(arr) {
    var freqTable = {};
    var newStr = ""
    for (var i=0; i < arr.length; i++) {
        var str = arr[i];
        if (freqTable.hasOwnProperty(str) === false) {
            freqTable[str] = 1;
        } else {
            freqTable[str]++;
        }
    }
    for (key in freqTable) {
        newStr += key
    }
    return newStr
}
x = frequencyTableBuilder(str2);
console.log(x);


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
    var result = "";
    str.split(' ');
    for(i=0; i<str.length; i++){
        str.reverse();
    }
}
console.log(str1)