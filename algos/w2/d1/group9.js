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
  // Iterate through the string
  var newStr = "";
  var letterCount = 1;
  newStr = str[0]
  if(str.length == 0){
    return str
  }
  if(str.length == str.length-1){
    return str
  }
  for ( var i = 0; i < str.length; i++){
    // For each letter count how many times it shows up in its sequence. 
    if(str[i] == str[i+1]){
      letterCount ++;
    }
    else{
      newStr += letterCount;
      letterCount = 1;
    }
    if(str[i] != str[i+1]){
      newStr += str[i+1];
    }
  }
  return newStr
}
console.log(encodeStr(str3))

/*****************************************************************************/

/* 
  String Decode  
*/

const str1 = "a3b2c1d3";
const expected1 = "aaabbcddd";

function decodeStr(str) {}
