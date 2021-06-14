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

/*****************************************************************************/

/* 
  String Decode  
*/

const str1 = "a3b2c1d3";
const expected1 = "aaabbcddd";

function decodeStr(str) {
  // SETUP
  var decoded = "";

  // WORK
  for (var i = 0; i < str.length; i++) {
    var n = parseInt(str[i]);
    // if str[i] is a number, n will be the number
    // if str[i] is not a number. n will be NaN (not a number)
    if (n) {
      decoded += str[i - 1].repeat(n);
    }
  }

  // RETURN
  return decoded;
}
