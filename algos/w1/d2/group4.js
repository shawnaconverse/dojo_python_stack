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
  var words = [];
  var acronym = "";
  words = str.split(" ");
  for (var i = 0; i < words.length; i++) {
    if (words[i][0] != undefined) {
      acronym = acronym + words[i][0];
    }
  }
  // acronym.toUpperCase(); // not working? //.toUpperCase doesn't change the original string - needs a new string
  // return acronym;

  //try this one
  var string_ = acronym.toUpperCase(); //.toUpperCase doesn't change the original string - needs a new string
  return string_;
}

console.log(acronymize(str1));
console.log(acronymize(str2));

/* attempt to do it wihtout split */
function acronymize2(str){
    var acronym2 = "";
    for (var i = 0; i < str.length-1; i++){
        if (str[i] == " "){
            acronym2 = acronym2 + str[i+1];
        }
        else if (i == 0){
            acronym2 = acronym2 + str[0];
        }
    }
    return acronym2
}

console.log("acronym2 is: " + acronymize2(str1));
console.log("acronym2 is: " + acronymize2(str2));



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
  var reversedStr = "";
  for (var i = str.length - 1; i >= 0; i--) {
    // console.log(str[i]);
    reversedStr = reversedStr + str[i];
    // .push() is only for arrays
  }
  return reversedStr;
}

console.log(reverseString(str1));
console.log(reverseString(str2));
