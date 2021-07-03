/* 
	Acronyms
	Create a function that, given a string, returns the string’s acronym 
	(first letter of each word capitalized). 
	Do it with .split first if you need to, then try to do it without
*/

const str1 = " there's no free lunch - gotta pay yer way. ";
// const expected1 = "TNFL-GPYW";

const str2 = "Live from New York, it's Saturday Night!";
// const expected2 = "LFNYISN";



function acronymize(str) {
	let upperStr = str.toUpperCase();
	let list = upperStr.split(" ");
	let stringToReturn = '';
	for(let word of list){
		if (word[0]){
			stringToReturn+=word[0]
		}
	}
	return stringToReturn
}

console.log(acronymize(str1));
console.log(acronymize(str2));

/*****************************************************************************/

/* 
	String: Reverse
	Given a string,
	return a new string that is the given string reversed
*/

const str1 = "creature";
// const expected1 = "erutaerc";

const str2 = "dog";
// const expected2 = "god";

function reverseString(str) {
	return str.split("").reverse().join("");
}

reverseString(str1);
reverseString(str2);

