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
  var newStr = str.split('');
  for(var i = 0; i < str.length; i++){
    var countLetter = 0;
    var tempLetter = str[i];
    var j = 0;
    while(str[j] == tempLetter){
      countLetter++;
      j = j + 2
    }
    newStr.push(str[i]);
    newStr.push(countLetter);
  }
  if(newStr.length == str.length){
    return str;
  }
  else{
    return newStr;
  }
}

console.log(encodeStr(str1))

/*****************************************************************************/

/* 
  String Decode  
*/

const str1 = "a3b2c1d3";
const expected1 = "aaabbcddd";

function decodeStr(str) {}
