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
  if(str.lengh <= 1) return str;
  
  var finalStr = str[0],count = 1,a = str[0];
  for(var i = 1; i<str.length; i++){
      if(str[i]==a)
      {
          count++;
          continue;
      }
      else{
          finalStr+=count.toString();
          count=1;
          a=str[i];
          finalStr+=a;
      }
  }
  finalStr+=count;
  return finalStr.length<str.length? finalStr:str;
}

function encodeStr(str) {
  var resultStr = str[0]
  var newStr =str[0]
  var count = 0
  for( var i = 0; i<str.length; i++){
    if (newStr == str[i]) {
      count++;
    }
    else if( newStr != str [i]){
      resultStr += count;
      count = 1;
      newStr = str[i];
      resultStr += str[i]
    }
  }
  resultStr += count;
  if(resultStr.length < str.length){
    return resultStr
  }
  else{
    return str
  }
}

function encodeStr(str) {
  var charFrequency = {}  // {a: 4}
  var output = ""   
  // iterate given str, and store them into object like {a: 4}
  for (var chr of str){
      charFrequency[chr] = charFrequency[chr] + 1 || 1
  }
  // iterate object, and concanate its key(char) and value(frequency)
  for (var char in charFrequency){
      output += char + (charFrequency[char]).toString()
  }
  // if length of encoded string is less than original string, return output, or else return original str
  return (output.length < str.length ? output : str);
}

console.log(encodeStr(str1))
console.log(encodeStr(str2))
console.log(encodeStr(str3))
console.log(encodeStr(str4))
/*****************************************************************************/

/* 
  String Decode  
*/

function isNumeric(num){
  return !isNaN(num)
}


const str1 = "a3b2c1d3";
const expected1 = "aaabbcddd";

function decodeStr(str) {
  output = ""
  // if str length is less than 2, ""/a, return str
  if (str.length < 2) {
      return str;
  }

  // iterate given string from the second h
  for (var i = 1; i < str.length; i++){
      if (isNumeric(str[i])){
          let frequency = parseInt(str[i])
          for (var j = 0; j < frequency; j++){
              output += str[i-1]
          }
      }
  }
  return output
}

console.log(decodeStr(str1))