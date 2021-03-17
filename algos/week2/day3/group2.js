/* 
    Given a string,
    return a new string with the duplicates excluded
    Bonus: Keep only the last instance of each character.
*/

const str1 = "abcABC";
const expected1 = "abcABC";

const str2 = "helloo";
const expected2 = "helo";


function stringDedupe(str){
    var newstr = "";
    for (i = 0; i < str.length; i++){
    int a;
        for(a = 0; a < 1; a++){
            if (str[i]==str[a]) {
            
            break;
            }
        if (a == i) {
        newstr.append(str[i])
        }
        }
    }
}



/*****************************************************************************/
:

/* 
    Given a string containing space separated words
    Reverse each word in the string.
    If you need to, use .split to start, then try to do it without.
*/

const str1 = "hello";
const expected1 = "olleh";

const str2 = "hello world";
const expected2 = "olleh dlrow";

const str3 = "abc def ghi";
const expected3 = "cba fed ihg";


function reverseWords(str) {
    var newarr = str.split(" ")
    console.log(newarr) //[ 'hello', 'world' ]
    var newstr = ""
    for (i=0 ; i<arr.length;i++) {
        
            for(u=0; u >arr[i].length/2; u++) {
                
                temp = arr[i][u];
                arr[i][u] = arr[i][arr[i].length-1-u];
                arr[i][arr[i].length-1-u] = temp;
            }
        newstr.append(newarr[i])
    }


}