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
  var stringMap = {};
  var ch, count;
  var newString = "";
  if (str.length < 2) {
    return str;
  }
  // Loop through the string...
  for (var i = 0; i < str.length; i++) {
    // Get this character
    ch = str.charAt(i);
    // Get the count for it, if we have encountered the character already
    count = stringMap[ch];
    // If count for that char is greater than 0, store that count plus one; if not, store one
    stringMap[ch] = count ? count + 1 : 1;
  }
  // Loop through the map and construct the new string
  for (ch in stringMap) {
    newString += ch + stringMap[ch];
  }
  if(str.length <= newString.length) {
  return str;
  }
  return newString;
}

console.log(encodeStr(str1));
console.log(encodeStr(str2));
console.log(encodeStr(str3));
console.log(encodeStr(str4));

/*****************************************************************************/

/* 
  String Decode  
*/

const str1 = "a3b2c1d3";
const expected1 = "aaabbcddd";

function decodeStr(str) {
  var newString = "";
    // Loop through the string
    for (var i = 0; i < str.length - 1; i++) {
        // Loop through the number of times the character should show up in the new string
        for (var j = 0; j < parseInt(str.charAt(i+1)); j++) {
            // Create the new string
            newString += str.charAt(i);
        }
        // Skip the number and move on to the next character
        i++;
    }
    return newString;
}
console.log(decodeStr(str1));

