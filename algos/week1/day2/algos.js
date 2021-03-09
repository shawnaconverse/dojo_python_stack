/* 
	Acronyms
	Create a function that, given a string, returns the string’s acronym 
	(first letter of each word capitalized). 
	Do it with .split first if you need to, then try to do it without
*/
// .split() returns an array
// str.split(" ")
const str1 = " there's no free lunch - gotta pay yer way. ";
const expected1 = "TNFL-GPYW";

const str2 = "Live from New York, it's Saturday Night!";
const expected2 = "LFNYISN";

// SORRY FORGOT TO MENTION
// PLEASE USE THE GROUP FILE FOR YOUR BREAKOUT ROOM NUMBER
// THANKS
function acronymize(str) {
	// SETUP
	var acronyms = "";
	var wordsArr = str.split(" "); // ["Live", "from", "New", "York"];
	// WORK
	// for (var i = 0; i < wordsArr.length; i++) {}
	for (var word of wordsArr) {
		// acronyms = acronyms + word[0].toUpperCase();
		acronyms += word[0].toUpperCase();
	}
	// RETURN
	return acronyms;
}


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
	// SETUP
	var returnStr = "";
	// WORK
	for (var i = str.length - 1; i >= 0; i--) {
		returnStr += str[i]
	}
	// RETURN
	return returnStr;
}
