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

  let encoded = '';
  
  //for loop across the string
  //if the next letter is the same; we jsut continue into the loop
  //otherwise we append the letter and index - starting index into the encoded string

  for(let i=0; i < str.length; i++){
    let count = 1;
    while(str[i]=== str[count+i]){
      count++;
    }
    
    encoded+=str[i]+(count);
    i = i+count-1;
  }

  if (str.length > encoded.length){
    return encoded
  }
  else{
    return str
  }

  // return str.length > encoded.length ? encoded : str   <--- Ternary operator
}


console.log(encodeStr(str1));
console.log(encodeStr(str2));
console.log(encodeStr(str3));
console.log(encodeStr(str4));


/*****************************************************************************/

/* 
  String Decode  
*/

const str1 = "a3b2c1d3";
const expected1 = "aaabbcddd";

function decodeStr(str) {
  for(let i = 0; i < str.length; i++){
    let count = 1;
    if (isNaN(count) )              //it should be str[count] since that is what we're looking for (:
  }
}
