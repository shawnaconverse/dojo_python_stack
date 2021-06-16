/* 
  Given a string,
  return a new string with the duplicates excluded
*/

const str1 = "abcABC";
const expected1 = "abcABC";

const str2 = "helloo";
const expected2 = "helo";

function stringDedupe(str) {
  let objOfStrings= {};
  let newStr = '';
  for (let i = 0; i < str.length; i++){
    if (!(objOfStrings[str[i]])){
      newStr+= str[i];
      objOfStrings[str[i]] = true;
    }
  }
  return newStr;
}

console.log(stringDedupe(str1));
console.log(stringDedupe(str2));

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

function reverseWords2(str) {

  return str.split("").reverse().join("").split(" ").reverse().join(" ")
  
}

function reverseWords(str){
  let newstr = '';
  let word = ''
    for(let i =0; i < str.length; i++){
      if(str[i] === ' ' ){
        newstr +=  word + ' '
        word='';
      }
      else{
        word = str[i] + word
      }
    } 
  newstr+=word
return newstr;

}




