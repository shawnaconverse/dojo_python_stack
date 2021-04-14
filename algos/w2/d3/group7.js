/* 
  Given a string,
  return a new string with the duplicates excluded
*/

function stringDedupe(str){
  var newStr = ""
  var check = 0
  var temp = []
  for (var i = 0; i < str.length; i++){
      for (var j = i+1; j < str.length; j++){
          if (str[i] == str[j]){
              check++
              temp.push(str[i])
              temp.push(str[j])
          }
      }
      if (check == 0){
          newStr += str[i]
      }
      else {
          console.log(temp)
          for (var k = 0; k < temp.length; k+=2){
              newStr += temp[k]
          }
      }
  }
  return newStr
}

const str1 = "abcABC";
const expected1 = "abcABC";
console.log(stringDedupe(str1))

const str2 = "helloo";
consct expected2 = "helo";
console.log(stringDedupe(str2))

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
  var arr = str.split(" ")
  var arrWord = []
  var newStr = ""
  for (var i = 0 ; i < arr.length; i ++){
      arrWord[i] = arr[i].split("").reverse().join("")
      console.log(arrWord[i])
  }
  for
  return arrWord
}
  
