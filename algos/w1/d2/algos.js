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

// str1.split(" ") => ["there's", "no", "free", "lunch"]
function acronymize(str) {
  // SETUP
  var acronym = "";
  var wordsArr = str.split(" ");

  // WORK - usually in these algos it means a loop
  for (var word of wordsArr) {
    acronym += word[0].toUpperCase();
  }
  // for (var index = 0; index < wordsArr.length; index++) {
  // 	acronym += wordsArr[index][0].toUpperCase();
  // }

  // RETURN
  return acronym;
}

/**************l***************************************************************/
/* 
	String: Reverse
	Given a string,
	return a new string that is the given string reversed
*/
// Strings are immutable
// Strings are 0 indexed
// str1[3]
const str1 = "creature";
const expected1 = "erutaerc";

const str2 = "dog";
const expected2 = "god";

function reverseString(str) {
  // SETUP
  var reversed = "";

  // WORK
  for (var i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  // RETURN
  return reversed;
}
