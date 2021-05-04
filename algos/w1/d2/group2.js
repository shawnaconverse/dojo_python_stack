/* Group Two !!!!!
	Acronyms
	Create a function that, given a string, returns the string’s acronym 
	(first letter of each word capitalized). 
	Do it with .split first if you need to, then try to do it without
*/

const str1 = " there's no free lunch - gotta pay yer way. ";
const expected1 = "TNFL-GPYW";

const str2 = "Live from New York, it's Saturday Night!";
const expected2 = "LFNYISN";

function acronymize(str){
	let acronym1 = str.split(/\s/).reduce((response,word)=> response+=word.slice(0,1),'')

	acronym = acronym1.toUpperCase()
  console.log(acronym);
  
  }
  
  acronymize(str1);
  acronymize(str2);


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
	for (var i = str.length - 1; i >=0; i--){
		newString += str[i]
	}
  console.log(newString) 
}

reverseString(str1);
reverseString(str2);



// You should use the charAt() method, at index 0, to select the first character of the string. 
// NOTE: charAt is preferable than using [ ] (bracket notation) as str. charAt(0) returns an empty string ( '' ) for str = '' instead of undefined in case of ''[0] .