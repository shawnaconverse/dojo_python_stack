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
    var splitString = str.split("")
    var table = {
        a:0,
        b:0,
        c:0,
        d:0,
    }
    for(var i=0; i<str.length; i++){
        if (splitString[i]== 'a'){
            table.a +=1
        }
        if (splitString[i]=='b'){
            table.b +=1
        }
        if (splitString[i]=='c'){
            table.c +=1;
        }
        if (splitString[i]=='d'){
            table.d +=1;
        }
    }
    if(str.length>splitString.length){
        return str
    }
    else {
        return table
        return "a" + table.a + "b" + table.b+ "c" + table.c +"d" + table.d;
}
}
console.log(encodeStr("aaaabbcddd"))



/*****************************************************************************/


/* 
    String Decode  
*/

const str1 = "a3b2c1d3";
const expected1 = "aaabbcddd";


function decodeStr(str) {}

