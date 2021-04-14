/* 
  Given a string,
  return a new string with the duplicates excluded
*/

  //create a new dict to log existing letters
  //create new string to hold edit
  //iterate through string 
  //if the value, write  value to a new string, and log the value
  //if it exists, skip
  //return new string

  const str1 = "abcABC";
  const expected1 = "abcABC";
  
  const str2 = "helloo";
  const expected2 = "helo";
  
  const str3 = "helloolllooo";
  const expected3 = "helo";
  
  function stringDedupe(str) {
      existingDict = {}
      dedupedString = ""
      for (let i=0; i< str.length ;i++){
          if (existingDict.hasOwnProperty(str[i])){
          }else{
              dedupedString += str[i]
              existingDict[str[i]] = true
          }
      }
      return dedupedString
  }
  
  console.log(stringDedupe(str1))
  console.log(stringDedupe(str2))
  console.log(stringDedupe(str3))

/*****************************************************************************/

/* 
  Given a string containing space separated words
  Reverse each word in the string.
  If you need to, use .split to start, then try to do it without.
*/

//split version
//create empty string to hold result
//split string into array of strings
//split each string into an array of letters
//reverse each letter
//stitch each word back together
//stitch string back together, returning " "

function reverseWords(str) {
  let reversedString = ""
  let wordArray = str.split(" ")
  for (let i=0; i< wordArray.length ;i++){
      reversedString += wordArray[i].split("").reverse().join("")
      if (i != wordArray.length -1){
          reversedString += " "
      }
  }
  return reversedString
}

console.log(reverseWords(str1))
console.log(reverseWords(str2))
console.log(reverseWords(str3))



function reversedWordsLoopy(str){
  let reversedString = ""
  let wordArray = []
  wordArray[0] = ""
  let j = 0 //index of wordarray    i = index of string
  for(let i = 0; i < str.length ;i++){ //iterate through string
      if (str[i] == " "){                
          j++
          wordArray[j] =""
      }else{
          wordArray[j] += str[i]
      }
  }//string is split into an array of words

  
  return reversedString
  } //unfinished )=

  console.log(reversedWordsLoopy(str1))
  console.log(reversedWordsLoopy(str2))
  console.log(reversedWordsLoopy(str3))