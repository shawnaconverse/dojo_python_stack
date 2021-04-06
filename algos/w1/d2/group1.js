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
    x = str.toUpperCase();
    y = x.split(" "); // makes array of all words
    var expected = [];
    for (var i = 0; i < y.length; i++) {
        expected.push((y[i][0]));
    }
    return expected.join("");
    }
console.log(acronymize(str1));

//Python [word[0]] for word in str.split()]

// var matches = str.match(/\b(\w)/g);
// var acronym = matches.join('');

// console.log(acronym)

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
	// return str.split("").reverse().join("");
	expected = [];
	for (var i = str.length - 1; i >= 0; i--) {
	  expected.push(str[i]);
	}
	return expected.join("");
}

console.log(reverseString(str1));
