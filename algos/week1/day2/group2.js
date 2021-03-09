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

var x=0;
var y=" ";
function acronymize(str) {
	for (var i = 0; i < str.length; i++) {
		str=str.split(" ")
		y+=str[i][0];
	}
return y;
}
console.log(acronymize(" there's no free lunch - gotta pay yer way. "))

// -------------------------------------------------------------------

// var string1rr = string.split(" ");
function acronymize(string) {
    var string = string.split(" ");
    var acronym = " ";
    for (var i = 0; i < string.length; i++) {
    	acronym += string[i][0];
    }
    return acronym;
}
console.log(acronymize("there's no free lunch - gotta pay yer way."));
console.log(acronymize("Live from New York, it's Saturday Night!"));


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

