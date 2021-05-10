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

const str4 = "bbcc"; // "b2c2"
const expected4 = "bbcc";

function encodeStr(str) {
  
  if(str.length <= 1){
    return str;
  }
  
  var newStr = "";
  for(var i = 0; i < str.length; i++) {
    count = 1;
    for(var j = i + 1; j < str.length; j++){
      if(str[i] == str[j]){
        count++;
      } 
      if(str[i] != str[j] || j == str.length-1){
        newStr += str[i] + count;
        i = j-1;
        break;
      }
    }
  }
  // if(newStr.length < str.length) {
  //   return newStr;
  // } else {
  //   return str;
  // }
  // ternary operator     
  //           condition             if true   if false
  return newStr.length < str.length ? newStr : str; // syntatic sugar
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
    var n = parseInt(str[i]) // if the string is a number, converts it to a number
    // if the string is not a number, then n would be equal to NaN (Not A Number)

    // parseInt("3") => 3
    // parseInt("a") => NaN
    // in python, we would say int("3")

    // Truthy and Falsy
    // if n = NaN => False
    // if n = 3 => True
    if (n) {
      decoded += str[i - 1].repeat(n); // repeat just repeats the string n times
    }
  }

  // RETURN
  return decoded;
}
