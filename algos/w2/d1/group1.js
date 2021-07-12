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
  var count = 1
  var result = ""

  for (var i = 0; i < str.length; i++){
    result += str[i]
    for (var y = i + 1; y < str.length; y++){
      if (str[y] == str[i]){
        count++
      }
      else{
        result += count
        i = y - 1 // if i = y, would i become y+1 on next iteration? Meant to skip to next non-repeated letter
        count = 1
      }
    }
  }
  if (result.length >= str.length){
    return str
  }
  return result;
}

/*****************************************************************************/

/* 
  String Decode  
*/

const str1 = "a3b2c1d3";
const expected1 = "aaabbcddd";

function decodeStr(str) {
  var result = ""

  for (var i = 0; i < str.length; i++){
    if (i % 2 == 0){ //letters will be on even indices
      result += str[i] * parseInt(str[i + 1]) //insert letters into string * the value next to it, this probably doesn't work
    }
  }
  return result
}
