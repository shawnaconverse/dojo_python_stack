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

var counter;
var seen=str[0];
var expectedString="";

function encodeStr(str) {
  
  var counter;
  var expectedString="";
  var seen=str[0];
  for(var i=0; i<str.length; i++){
    if(str[i] === str[0]){
      counter++;
    }
    else {    
      seen = str[i];
    }
    expectedString = seen.concat(counter);
  }
  if(expectedString.length <= str.length){
    return str;
  }
  else{
  return expectedString;
  }
  
}
var result = encodeStr(str1);
console.log(result);

/*****************************************************************************/

/* 
  String Decode  
*/

const str1 = "a3b2c1d3";
const expected1 = "aaabbcddd";

function decodeStr(str) {}
s