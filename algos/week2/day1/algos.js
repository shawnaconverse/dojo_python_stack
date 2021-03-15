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
    // Edge cases, empty strings or 1 character strings
    if (str.length < 2) {
        return str;
    }
    // SETUP
    var charFreq = {};
    var encoded = "";
    // WORK
    for (var char in str) {
        // Truthy and Falsy
        if (charFreq[char]) {
            charFreq[char]++;
        } else {
            charFreq[char] = 1;
        }
    }

    // Objects (Dictionaries) UNORDERED NO GUARANTEE 
    for (var char in str) {
        // checking the value of that key.
        // Positive number == True
        // 0 == False
        if (charFreq[char]) {
            // "" += 'a' + 4
            // "a4" += 'b' + 2
            encoded += char + charFreq[char];
            // a4a4a4a4b2b2c1d3d3d3
            // actual resutlt a4b2c1d3
            charFreq[char] = 0
        }
    }

    // RETURN
    // When we return comparison to the input string
    // TERNARY OPERATOR
    return encoded.length < str.length ? encoded : str;
    if (encoded.length < str.length) {
        return encoded;
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


function decodeStr(str) {
    var decoded = "";

    for (var i = 0; i < str.length; i++) {
        // "a4b2"
        var n = parseInt(str[i]); // changing from String to integer
        if (n) {
            decoded += str[i - 1].repeat(n);
            // str[i - 1] = 'a'
            // n = 4
            // "aaaa"
        }
    }
    return decoded;
}

