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


function acronymize2(str) {
	var acronym = '';
	var strings = str.split(" ");
	for (var i = 0; i < strings.length; i++){
		var word = strings[i];
		var letter = word[0];
		if(letter){
			acronym += letter.toUpperCase();
		}
	}
	return acronym;
}
console.log(acronymize2(str1));

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
	var newString = "";
	for (var i = str.length -1 ; i >= 0; i--){
		newString.push(str[i]);
	}
}

reverseString(str1)