/* 
	Acronyms
	Create a function that, given a string, returns the string’s acronym 
	(first letter of each word capitalized). 
	Do it with .split first if you need to, then try to do it without
*/


const str1 = " there's no free lunch - gotta pay yer way. ";
const expected1 = "TNFL-GPYW";

const str2 = "Live from New York, it's Saturday Night!";
const expected2 = "LFNYISN";

function acronymize(str){
	var newStr = str.split(" ");
	console.log(newStr)
    var capStr = ""
    for (var i = 0; i < newStr.length; i++){
        if (newStr[i] != ""){
            capStr+=newStr[i][0]
        }
    }
    return capStr.toUpperCase()
}

console.log(acronymize(str1))


/*****************************************************************************/

// Make function that takes str
// Loop that goes through array with if statements, starting from 0 end at length
// If statement that looks at 

/* 
	String: Reverse
	Given a string,
	return a new string that is the given string reversed
*/

const str1 = "creature";

const str2 = "dog";

function reverseString(str){
    var newStr = ""
    for(var i = str.length-1; i >= 0; i--){
         newStr+=str[i]
        //  console.log(str[i])
    }
    return newStr
}

const new1 = reverseString(str1)
