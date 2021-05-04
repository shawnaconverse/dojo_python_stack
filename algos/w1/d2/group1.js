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

function acronymize(str) {

	var newStr = ""
    var workStr = ""

    for(var k = 0; k < str.length; k++){
        workStr += str.charAt(k)
        if(str.charAt(k) == " " || k == str.length-1){
            newStr += workStr.charAt(0).toUpperCase()
            workStr = ""
        }
    }
    return newStr

//     str = str.split(" ")
//     var newStr = ""
//     for (var i = 0; i < str.length; i++){
//         str[i] = str[i].toUpperCase().charAt(0)
//         newStr += str[i]
//     }
//     return newStr
// }
x = acronymize(str2)
console.log(x)

// *****************************************************************************

/* 
	String: Reverse
	Given a string,
	return a new string that is the given string reversed

*/

const str3 = "creature";
const expected3 = "erutaerc";

const str4 = "dog";
const expected4 = "god";

function reverseString(str) {
    str = str.split("")
    var newStr = ""
    for(var i = 0; i < str.length/2; i++) {
        temp = str[i]
        str[i] = str[str.length-(i+1)]
        str[str.length-(i+1)] = temp
    }
    for(var j = 0; j < str.length; j++){
        newStr += str[j]
    }
    return newStr
}
y = reverseString(str4)
console.log(y)