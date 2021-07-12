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
  var encoded = [];
  var count = 0;
  for (var i = 0; i <= str.length; i++) {
    if (i == 0) {
      encoded.push(str[i]);
      count++;
    } else if (str[i] == str[i - 1]) {
      count++;
    } else {
      encoded.push(count);
      encoded.push(str[i]);
      count = 0;
      count++;
    }
  }
  //console.log(encoded.join(""));

  if (encoded.join("").length < str.length) {
    return encoded.join("");
  } else {
    return str;
  }
}

/*****************************************************************************/

/* 
  String Decode  
*/

const str1 = "a3b2c1d3";
const expected1 = "aaabbcddd";
const str2 = "a300b2c1d3";

function decodeStr(str) {
  // SETUP
  let decoded = "";

  // WORK
  for (let i = 0; i < str.length; i++) {
    let numStr = str[i]
    // let n = parseInt(str[i]);
    // str[i] is a number: n = number
    // str[i] is a letter: n = NaN

    let k = i + 1;
    while (isNumeric(str[k])) {
      numStr += str[k];
      k++
    }
    // numStr = 300
    let n = parseInt(numStr)
    if (n) {
      // when will this if statement run? when n = number
      decoded += str[i - 1].repeat(n); // "a".repeat(3) => "aaa"
      // for (let j = 0; j < n; j++) {
      //   decoded += str[i - 1];
      // }
    }
  }

  // RETURN
  return decoded;
}
