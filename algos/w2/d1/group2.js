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
  var counter = 1;
  var new_str = "";
  for (var i = 0; i < str.length; i++){
    if (str[i] == str[i + 1]){
      counter++;
    }
    else {
      new_str += str[i] + counter
      counter = 1;
    }
  }
  if(str.length <= new_str.length){
    return str;
  }
  else{
    return new_str;
  }
}

console.log(encodeStr("aaaaaaaaaabcdddabb"))



/*****************************************************************************/

/* 
  String Decode  
*/

const str1 = "a3b2c1d3";
const expected1 = "aaabbcddd";

function decodeStr(str) {
  var new_str = "";
  var arr = str.split("");
  for(var i = 0; i < arr.length; i++){
    var new_arr = [];
    new_arr = arr[i] * arr[i+1];
    console.log(new_arr)
  }
}

console.log(decodeStr("a3b2c1d3"))

