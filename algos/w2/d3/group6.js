/* 
  Given a string,
  return a new string with the duplicates excluded
*/

const str1 = "abcABC";
const expected1 = "abcABC";

const str2 = "helloo";
const expected2 = "helo";

function stringDedupe(str) {
  let charArray = str.split("");    
  for(i = 0; i < str.length; i++){      //go through the string
    for(j = i + 1; j <charArray.length; j++){   //compare next string char
      if(charArray[i] == charArray[j]){         //if they are the same
        charArray.splice(j,1);              //splice removing j from contents
        j--
      }
    }
  }
  return charArray.join("");
}

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
  //split the string by word into a map
  return str.split(' ').map(function(word) {
    //split the words apart and join them back together after reversing them
    return word.split('').reverse().join('');
  // join the string back together with reversed words. 
  }).join(' ');
}
console.log(reverseWords(str2));
