/* 
	Acronyms
	Create a function that, given a string, returns the string’s acronym 
	(first letter of each word capitalized). 
	Do it with .split first if you need to, then try to do it without
*/

const str1 = " there's no free lunch - gotta pay yer way. ";
const expected1 = "TNFL-GPYW";

const str2 = "Live from New York, it's Saturday Night!";
const expected2 = "LFNYISN";

function acronymize(str) {
    var wordsArr = str.split(" ") // turns the str into an array
    var newStr = ""
    for (var i = 0; i < wordsArr.length; i++) {
        newStr += wordsArr[i].charAt(0);
    }
    return newStr.toUpperCase();
}

function acronymize1(str) { //no split

}

console.log(acronymize(str1))
console.log(acronymize(str2))

/*****************************************************************************/

/* 
	String: Reverse
	Given a string,
	return a new string that is the given string reversed
*/

const str1 = "creature";
const expected1 = "erutaerc";

const str2 = "dog";
const expected2 = "god";


function reverseString(str) {
    newStr = "";
    for (var i = str.length - 1; i > -1; i--) {
        newStr += str.charAt(i);
    }
    return newStr;
    // Loop
}
console.log(reverseString(str1))