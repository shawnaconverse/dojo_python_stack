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

function acronymize(wordsStr) {
	let acronym = "";
	const wordsArr = wordsStr.split(" ");

	for (const word of wordsArr) {
			acronym += word[0].toUpperCase();
	}
	return acronym;
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
    var reversed = "";

    // WORK
    // LOOP THROUGH STR STARTING AT THE END
    // APPEND CHAR AT I TO REVERSED
    for (var i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    // RETURN
    return reversed;
}