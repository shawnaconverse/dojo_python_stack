/* 
String Encode
You are given a string that may contain sequences of consecutive characters.
Create a function to shorten a string by including the character,
then the number of times it appears. 


If final result is not shorter (such as "bb" => "b2" ),
return the original string.
*/

const str1 = "aaaabbcddd";
// const expected1 = "a4b2c1d3";

const str2 = "";
// const expected2 = "";

const str3 = "a";
// const expected3 = "a";

const str4 = "bbcc";
// const expected4 = "bbcc";

function encodeStr(str) {
  var x = 0
  var count = 0
  var answer = ""
  var arr = []

  if (str.length <= 1) {
    return str;
  }

  arr.push(str.split())
  console.log(arr)

  for (var i = 0; i < arr.length; i++){
    x = str[i]
    count = 0

    for (var j = i + 1; j < arr.length; j++){
      if(str[j] == str[i]) {
        count ++
        if (str[j] == str.length) {
         answer = x + count
        }
      } 
    }
  } 
  return(answer)
}

encodeStr (str1)
encodeStr (str2)
encodeStr (str3)

/*****************************************************************************/

/* 
  String Decode  
*/

const str1 = "a3b2c1d3";
const expected1 = "aaabbcddd";

function decodeStr(str) {}
