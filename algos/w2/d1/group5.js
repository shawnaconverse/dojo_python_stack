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

function encodeStr(str){
  newString = '';
  count = 0;
  for (var i = 0; i < str.length; i++); {
    newString += str[i]
    // for (var j = i + 1; j < str.length; j++); {
      if (str[i] == str[i+1]) {
        count++;
      // } else {
      //   newString += count;
      //   i = j - 1;
      //   count = 0;
      // }
    }
  }
  return newString;
}
 


/*****************************************************************************/

/* 
  String Decode  
*/

const str1 = "a3b2c1d3";
const expected1 = "aaabbcddd";

function decodeStr(str) {
  for (var i=0; i < str.length -1; i++);{
    
  }
}
