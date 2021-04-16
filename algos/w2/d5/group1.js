/* 
  An anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
  typically using all the original letters exactly once.
  Is there a quick way to determine if they aren't an anagram before spending more time?
  Given two strings
  return whether or not they are anagrams
*/

function isAnagram(s1, s2) {
  var arr1 = s1.toLowerCase().split("")
  var arr2 = s2.toLowerCase().split("")

  if (arr1.length != arr2.length){
    return false
  }
  else {
    for (var i = 0; i < arr2.length; i++){
      var index = arr1.indexOf(arr2[i])
      if (index == -1){
        return false
      }
      else{
        arr1[index] = ""
      }
    }
    var str1 = arr1.join("")
    var str2 = arr2.join("")
    if (str1 != ""){
      return false
    }
    else{
      return true
    }
  }
}

const strA1 = "yes";
const strB1 = "eys";
const expected1 = true;
console.log(isAnagram(strA1, strB1))

const strA2 = "yes";
const strB2 = "eYs";
const expected2 = true;
console.log(isAnagram(strA2, strB2))

const strA3 = "no";
const strB3 = "noo";
const expected3 = false;
console.log(isAnagram(strA3, strB3))

const strA4 = "silent";
const strB4 = "listen";
const expected4 = true;
console.log(isAnagram(strA4, strB4))


/*****************************************************************************/

/* 
  Given a string that may have extra spaces at the start and the end,
  return a new string that has the extra spaces at the start and the end trimmed (removed)
  do not remove any other spaces.
*/

function trim(str) {
  var arrayWords = str.split(" ")
  var returnStr = ""
  for (var i = 0; i < arrayWords.length; i++){
    if (arrayWords[i] != ""){
      returnStr += arrayWords[i]
      returnStr += " "
    }
  }
  var finalReturnStr = returnStr.slice(0, returnStr.length - 1)
  return finalReturnStr
}

// or just do the (built in) trim function 

const str1 = "   hello world     ";
const expected1 = "hello world";
console.log(trim(str1))

