/* 
  Given a string,
  return a new string with the duplicates excluded
*/

const str1 = "abcABC";
const expected1 = "abcABC";

const str2 = "helloo";
const expected2 = "helo";

function stringDedupe(str) {
  var dict={};
  var answer="";
 
  for(var i= 0;i<str.length;i++){
    
    if(dict.hasOwnProperty(str[i])==false){
      answer+= str[i];
      dict[str[i]]=1;
    }
  }
  return answer;


}


  console.log(stringDedupe(str1));

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
  
  var arr = str.split(" ");
  for(var i = 0; i<arr.length;i++){
    var revArr = arr[i].split("");
    arr[i]=revArr.reverse().join("");

  }
  var answer = arr.join(" ");
  return answer;
  
}
console.log(reverseWords(str3));


//without using split
function reverseWords2(str){
  var word =""  
  var answer=""

    for(var i = str.length-1;i>=0;i--){ //start at end of string
      if(str[i]!=" "){   //if not a space keep reverseing letters for the word
        word += str[i];
      }
      else{                //hit a space so add word to the front of string
        answer= word+ " "+ answer;
        word ="";
      }
    }
    
    
    answer = word+" "+ answer;  //end of input but did not come across a space so add final word to answer
    return answer;
}


console.log(reverseWords2(str2));