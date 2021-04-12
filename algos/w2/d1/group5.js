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
    //SETUP
    var dict = {}
    //PULL THE CHARACTER AND PUT IT AS A KEY INTO A DICT
    var repeats = [];
    //THE RETURNED STRING
    var coded_sting = " "
    //WORK
    //edge case
    if(str.length < 1)
      return str
    //ITERATE THROUGH STR
    for(x = 0, length = str.length; x < length; x++) {
        //
        var l = str.charAt(x)
        dict[l] = (isNaN(dict[l]) ? 1 : dict[l] + 1);
    }
    //RETURN
    console.log(dict)
}
encodeStr(str1)
/*****************************************************************************/

/* 
  String Decode  
*/

const str1 = "a3b2c1d3";
const expected1 = "aaabbcddd";

function decodeStr(str) {}
