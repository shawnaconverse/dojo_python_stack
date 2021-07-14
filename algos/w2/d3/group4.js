/* 
  Given a string,
  return a new string with the duplicates excluded
*/

const str1 = "abcABC";
const expected1 = "abcABC";

const str2 = "helloo";
const expected2 = "helo";

function stringDedupe(str) {
  newString = "";
  for (var i = 0; i < str.length; i++) {
    for (var j = 1; j < str.length; j++) {
      if (str[i] == str[j]) {
        var temp = j;
          for (var k = temp; k < length - 1; k++) {
            str[k] = str[k+1];
          }
          j--;
          str.length--;
      }
    }
  }
  return newString = str
}

function removeDuplicate(str){
  var exp = []
  str = str.split("")
  for (var i = 0; i < str.length-1; i++){
      exp.push(str[i])
      for(var j = i+1; j <= str.length; j++){
          if(str1[i] == str[j]){
              str.splice(j)
              j -= 1
          }
      }
  }
  exp.join('')
  return exp
}

var str1 = "1234ab1313dddddddeeee"
console.log(removeDuplicate(str1))


console.log(stringDedupe(str1))
/*****************************************************************************/

/* 
  Given a string containing space separated words
  Reverse each word in the string.
  If you need to, use .split to start, then try to do it without.
*/

// const str1 = "hello";
// const expected1 = "olleh";

// const str2 = "hello world";
// const expected2 = "olleh dlrow";

// const str3 = "abc def ghi";
// const expected3 = "cba fed ihg";

// function reverseWords(str) {}
