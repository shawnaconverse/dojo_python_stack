/* 
String Encode
You are given a string that may contain sequences of consecutive characters.
Create a function to shorten a string by including the character,
then the number of times it appears. 


If final result is not shorter (such as "bb" => "b2" ),
return the original string.
*/

const str1 = "aaaabbcddd";
const expected1 = "a4b2c1d3";

const str2 = "";
const expected2 = "";

const str3 = "a";
const expected3 = "a";

const str4 = "bbcc";
const expected4 = "bbcc";

function encodeStr(str) {
  var counter = 0; // counter keeps track of how many times a character is repeated
  var encodedStr = "";
  var character = str[0]

  for(var i = 0; i < str.length; i++) {  // for loop iterates through string

    if(character === str[i]) {
      counter++;
      continue;
    }

    encodedStr += character + counter;
    character = str[i];
    counter = 1;
    }

    if(counter) {
      encodedStr += character + counter;
    }

    if(str.length === encodedStr.length || str.length < encodedStr.length) {
      return str;
    }

    return encodedStr;
  }

console.log(encodeStr(str1))
console.log(encodeStr(str2))
console.log(encodeStr(str3))
console.log(encodeStr(str4))


WHO DAT?

/*****************************************************************************/

/* 
  String Decode  
*/

const str1 = "a3b2c1d3";
const expected1 = "aaabbcddd";

function decodeStr(str) {}
