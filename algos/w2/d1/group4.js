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
// var count letter = str[0]
// encoded = ""
// var count = 0
// if str[i] == count letter
//  count += 1
// else:
//  encoded += count_letter + count
//  count letter = str[i]
//  count = 0
// if encoded length >= string length return str
function encodeStr(str) {
  var count_letter = str[0];
  var encoded = "";
  var count = 0;
  for (var i = 0; i <= str.length; i++)  {
    if (str[i] == count_letter) {
      count += 1
    }
    else {
      encoded += count_letter + count;
      count_letter = str[i];
      count = 1;
    }
  }
  if (encoded.length < str.length) {
    return encoded
  } else {
    return str
  }
}
console.log(encodeStr(str1))
console.log(encodeStr(str2))
console.log(encodeStr(str3))
console.log(encodeStr(str4))
/*****************************************************************************/

/* 
  String Decode  
*/
// var letter = 
// var count = 
// for loop to add letters in
//    for loop range == count
const str1 = "a3b2c1d3";
const expected1 = "aaabbcddd";

function decodeStr(str) {
  var decoded ='';
  var letter ='';
  var count = 0;
  for (var i = 0; i<str.length; i+2) {
    letter = str[i];
    count = parseint(str[i+1]);
    for (var j = 0; j<count; j++) {
      decoded += letter;
    }
  }
  return decoded;
}
console.log(decodeStr(str1))