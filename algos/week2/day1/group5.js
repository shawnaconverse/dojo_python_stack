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


function encodeStr(str){
    // Edge cases, empty strings or 1 character strings
    // When we return comparison to the input string
    var len= str.length;
    var new_str = "";
    if(len >= 2){
        count = 0;
        for(i = 0; i < len;i++){
            if(str[i] == str[i + 1]){
                count ++;
            }
            else if(str[i] != str[i + 1] && count == 0)
            {
                count ++;
                new_str = new_str + str[i] + count;
            }
            else{
                count ++;
                new_str = new_str + str[i] + count;
                count = 0;
            }
        }
        return new_str;
    }
    else{
        return str;
    }
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
    var len = str.length;
    if(len > 1){
        var new_str = "";
        for(i = 0; i < len; i++){
            if(Number.isInteger(Number(str[i+1]))){
                var count = Number(str[i+1]);
                new_str = new_str +(str[i].repeat(count));
           }   
        }
        return new_str;
    }
    else{
        return str;
    }
}

console.log(decodeStr(str1));
