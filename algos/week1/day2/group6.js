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
	str = str.split(" ");
  var new_string;
  for(i = 0; i < str.length-1; i++)
  {
    new_string += str[i][0];
  }
  new_string = new_string.toUpperCase();
  
	return new_string;
}

console.log(acronymize(str1));
console.log(acronymize(str2));


// function acronymize2(str1) {
	//	var expected = ""
	// for(i=0;i<str1.length;i++){
	// 		if (str1[i]==" "){
	//			
	//}
	//}
// }


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

