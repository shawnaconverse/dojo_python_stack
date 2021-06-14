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
  var empt = []
  var q = 1
  for (var i = 0; i < str.length; i++){
    for (var j = 1; j < str.length; j++){
      if (str[i] == str[j]){
        q += 1
      }
      else if (str[i] != str[j]){
        q = 1
      }
    }
    empt.push(str[i] + q )
  }
  return empt
}

/*****************************************************************************/

/*
  String Decode
*/

const str1 = "a3b2c1d3";
const expected1 = "aaabbcddd";

function decodeStr(str) {}
