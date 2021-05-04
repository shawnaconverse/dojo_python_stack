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
	newStr = str.split(" ");
  	acronymString = "";
  	for (var i = 0; i < newStr.length; i++) {
    	acronymString += newStr[i].charAt(0)
	  }
  	return acronymString.toUpperCase();
}
console.log(acronymize)

function acronymize(str) {
	newString = "";
	if (str.charAt(0) != " ") {
	  newString += str.charAt(0)
	}
	  for (var i = 0; i < str.length - 1; i++) {
	  console.log(i, str[i])
	  if (str[i].charAt() == " "){
		newString += str[i+1]
	  }
	}
	return newString.toUpperCase()
  }

//   UNDEFINED AT END 
// fixed at end by subtract one of length



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
