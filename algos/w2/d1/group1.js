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
  let num = 0;
  let encoded = "";
  for(var i = 0; i < str.length; i++){
    if(num==0){
      encoded+=str[i];
      num+=1;
    }
    if(str[i]!=str[i+1]){
      encoded+=num;
      num=0;
    }
    if(num!=0&&str[i]==str[i+1]){
      num+=1;
    }
  }
  if (str.length<=encoded.length){
    return str;
  }
  else{
    return encoded;
  }
}

console.log(encodeStr(str1))
console.log(encodeStr(str2))
console.log(encodeStr(str3))
console.log(encodeStr(str4))

// function that takes string
// loop through string
// 

/*****************************************************************************/

/* 
  String Decode  
*/

const str1 = "a3b2c1d3";
const expected1 = "aaabbcddd";

function decodeStr(str) {
  var newStr = ""
  for (var i = 0; i<str.length;i++){
    var n = parseInt(str[i]);
    if (n){
      decoded+=str[i-1].repeat(n);
    }
  }
  return newStr;
}
