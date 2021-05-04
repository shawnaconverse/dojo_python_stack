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

// str1.split(" ")

function acronymize(str) {
  // SETUP
  var acronym = "";
  var wordsArr = str.split(" ");

  // WORK
  for (var word of wordsArr) {
    acronym += word[0];
  }

  // RETURN
  return acronym.toUpperCase();
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
  // i need a new string to build the reverse
  var reversed = "";

  // WORK
  // i need to reverse the input string and concat it to the reversed variable
  for (var i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  // RETURN
  // i need to return the reversed string
  return reversed;
}
