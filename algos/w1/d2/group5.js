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
	newstring = str.split (" ");
	for (var i=0; i<newstring.length; i++){
		newstring[i] = newstring[i].charAt(0).slice(0,1).toUpperCase() +
		newstring[i].substring(1);
	}

	// if i =0
	return newstring.join('');

}

console.log (acronymize(str1))


// let str = "there's no free lunch - gotta pay yer way.";
//     let acronym = str.split(/\s/).reduce((response,word)=> response+=word.slice(0,1),'').toUpperCase()
//     console.log(acronym);




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

function reverseString(str) {}
