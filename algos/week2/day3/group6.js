/* 
    Given a string,
    return a new string with the duplicates excluded
    Bonus: Keep only the last instance of each character.
*/

const str1 = "abcABC";
const expected1 = "abcABC";

const str2 = "helloo";
const expected2 = "helo";


function stringDedupe(str) {
    var count = {};
    var expected = ""
    for(var i = 0; i<str.length; i++){
        if( count.hasOwnProperty(str[i]) == False){
            expected +=str[i];
            count[str[i]]=1
        }
        //setup set variables
        //work loop through...if not in freq table add
        //return
    }
}

function stringDedupe(str){
    var count = {}
    for(var i =0; i < str.length; i ++){
      if(!count.hasOwnProperty(str[i])){
        count[str[i]] = 0
      }
    }
    var returnStr = ""
    for(var [key, value] of Object.entries(count)){
      returnStr += key
    }
    return returnStr
  }
  console.log(stringDedupe("abcABC"))
/*****************************************************************************/


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
    var newstr=""
    for(var x= 0 ; x< str.length; x++){
        if (str[i]==' '){
            for (var y= x ; y< str.length; y++){
                newstr+=[y]
            }

        }
    }
        for( var i= 0 ; i< str.length; i++){
        var count = str.split(" ")
        for( var j =0; j< (str.length - i - 1)){
            var temp = items[j];
            items[j] = items[j+1];
            items[j+1] = temp;
        }
    }
}

function reverseWords(str){
    var count = str.split(' ')
    var returnString = ""
    for(var i = 0; i < count.length; i++){
      var reverseWords = ""
      for(var j = count[i].length - 1; j >= 0; j--){
        reverseWords += count[i][j]
      }
      returnString += reverseWords
      returnString += " "
    }
    return returnString
  }
  console.log(reverseWords("Hello World"));