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



//first, check if encoding is actually effecient, number of unique characters * 2 > number of characters total
//create string to store values
//iterate through string
//for each new character found, iterate forward and find out how many characters match
//save the character to the new string
//return

function encodeStr(str) {
  var encodedString = ""
  for(var i = 0; i < str.length ;i++){
    var uniqueCount = 0
    var checkVal = str[i]
    var j = i
    while (j < str.length){
      if (str[j] === checkVal){
        uniqueCount++
        j++
      } else {
        break
      }
      
    }
    encodedString+= str[i]
    encodedString+= uniqueCount
    i+= uniqueCount - 1
  }
  if (encodedString.length < str.length ){
    return encodedString
  }
  return str
}



console.log(encodeStr(str1))
console.log(encodeStr(str2))
console.log(encodeStr(str3))
console.log(encodeStr(str4))



/*****************************************************************************/

/* 
  String Decode  
*/

const str1 = "a3b2c1d3";
const expected1 = "aaabbcddd";

function decodeStr(str) {
  var decodedString = ""
  for (var i = 0; i < str.length ;i=i+2){
    for (var j = 0; j < str[i+1]; j++){
      decodedString += str[i]
    }
  }
  return decodedString
}

console.log(decodeStr(str1))