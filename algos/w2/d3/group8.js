/* 
  Given a string,
  return a new string with the duplicates excluded
*/

const str1 = "abcABC";
const expected1 = "abcABC";

const str2 = "helloo";
const expected2 = "helo";

function stringDedupe(str) {
  // create empty object/dictionary and set each unique value from string to a value of 1
  // add to value as you loop through the string
  // output each object key in new string once
  new_obj = {};
  new_str = "";
  for(var i = 0; i < str.length; i++){
    if(new_obj.hasOwnProperty(str[i])){
      new_obj[str[i]] += 1
    }
    else{
      new_obj[str[i]] = 1
      new_str += [str[i]]
    }
  }
  return new_str
}
console.log(stringDedupe("abcABC"))
console.log(stringDedupe("helloo"))

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
  str = str.split(" ")
  for(var i = 0; i < str.length; i++){
    str[i] = str[i].split("").reverse().join("")
  }
  str = str.join(" ")
  return str
}
console.log(reverseWords("hello world"))
console.log(reverseWords("abc def ghi"))

function reverseWords(str) {
  new_str = ""
  for(var i = str.length - 1; i >= 0; i--){
    new_str += str[i]
  }
  new_str = new_str.split(" ").reverse().join(" ")
  return new_str
}
console.log(reverseWords("hello world"))
console.log(reverseWords("abc def ghi"))


// function reverseWords(str) {
//   return str.split("").reverse().join("").split(" ").reverse().join(" ")
// }
// console.log(reverseWords(str2))

//hello world 
//h e l l o w o r l d .split
//d l r o w  l l e h .reverse
//dlrow lleh  .join
//dlrow  lleh .split
//lleh  dlrow .reverse
//lleh dlrow .join


//The below works not my code not to sure how this one works.
// function reverseWords(str) {
//   var words = [];
//   words = str.match(/\S+/g);
//   var result = "";
//   for (var i = 0; i < words.length; i++) {
//      result += words[i].split('').reverse().join('') + " ";
//   }
//   return result
// }
// console.log(reverseWords(str1))