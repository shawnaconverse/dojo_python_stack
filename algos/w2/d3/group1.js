/* 
  Given a string,
  return a new string with the duplicates excluded
*/

const str1 = "abcABC";
const expected1 = "abcABC";

const str2 = "helloo";
const expected2 = "helo";

function stringDedupe(str) {
  var log = {}
  var expected = ""
  for (var i = 0; i < str.length; i++) {
    if (!log[str[i]]) {
      log[str[i]] = 1;
      expected += str[i];
    }
  }
  return expected
}
console.log(stringDedupe(str1))
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
  var newStr = ""
  for(var i = str.length -1; i >= 0; i--){
    newStr += str[i]
    str.split(" ")
  }return newStr
}

console.log(reverseWords(str2))

const str1 = "hello";
const expected1 = "olleh";

const str2 = "hello world";
const expected2 = "olleh dlrow";

const str3 = "abc def ghi";
const expected3 = "cba fed ihg";

function reverseWords(str) {
  var empStr = "";
  var empArr = [];
  var newArr = str.split(" ")
  for (let i = 0; i < newArr.length; i++){
    // each word is newArr[i]
    for(var j = newArr[i].length; j >= 0; j--){
      if (j < newArr[i].length-1){
        empStr += newArr[i][j]
    }
    empStr += " "
  }
  return empStr
  // 
  // console.log(newArr)
}

console.log(reverseWords(str1))
console.log(reverseWords(str2))
console.log(reverseWords(str3))

function reverseWords(str) {
  var empStr = "";
  var empArr = [];
  var newArr = str.split(" ")
  for (words of newArr){
    for(var i = words.length-1; i >= 0; i--){
      empStr += (words[i])
      // console.log(empStr)
    }
    empStr += " "
  }
  empStr.rtrim()
  return empStr
  // 
  // console.log(newArr)
}

console.log(reverseWords(str2))