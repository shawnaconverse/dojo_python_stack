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
  if(str.length<=1){
    return str
  }
  let expected = ""
  let count = 1
  for(var i =0;i<str.length;i++){
    if(str[i] == str[i+1]) {

      count+=1
    }
    if(str[i] != str[i+1]) {
      expected += str[i]+count
      count=1
    }
  }
  return str.length<=expected.length ? str : expected;
}

/*****************************************************************************/

/* 
  String Decode  
*/

const str1 = "a3b2c1d3";
const expected1 = "aaabbcddd";

const str1 = "a3b2c1d3";
const expected1 = "aaabbcddd";

function decodeStr(str) {
  var output = "";
  for(var i=0;i<=str.length;i++){
      if(typeof parseInt(str[i]=="number")){
        for(var j = 1;j<=parseInt(str[i]);j++){
                output+=str[i-1];
        }
      }
  }
  return output;
}
console.log(decodeStr(str1))

