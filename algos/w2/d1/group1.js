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

function encodeStr(str) {}

/*****************************************************************************/

/* 
  String Decode  
*/(

const str1 = "a3b2c1d3";
const expected1 = "aaabbcddd";
var result = []
function decodeStr(str) {
  for(var i = 0; i < str1.length; i++){
    result.push(str1.charAt(i) = result  
  }
} console.log(decodeStr(str1))

/* 
function Charcount(str){
  var result = str.charAt(0);
  var count = 1;
  if (str.length == 1){
    result+= count;
    return result;
  }
  else{
    for(var i=1; i<str.length;i++){
      if(str.charAt(i) != str.charAt(i-1))
        result+= count + str.charAt(i);
        count = 1;
      }
      else{
        count++;
      }
    if ( i == str.length - 1){
      result += count;
    }
  }
  return result;
  }
}
*/