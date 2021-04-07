/*  
  Parens Valid
	Given an str that has parenthesis in it
	return whether the parenthesis are valid
*/

const str1 = "Y(3(p)p(3)r)s";
const expected1 = true;

const str2 = "N(0(p)3";
const expected2 = false;
// Explanation: not every parenthesis is closed.

const str3 = "N(0)t ) 0(k";
const expected3 = false;
// Explanation: because the underlined ")" is premature: there is nothing open for it to close.

const str4 = "a(b))(c";
const expected4 = false;
// Explanation: same number of opens and closes but the 2nd closing closes nothing

function parensValid(str) {
  let parenthesisTrack = 0
  for(let i = 0; i < str.length ;i++){
    if (str[i] === "("){
      parenthesisTrack++
    }
    else if (str[i] === ")"){
      parenthesisTrack--
    }
    if (parenthesisTrack < 0){
      return false
    }
  }
    return parenthesisTrack === 0
}

console.log(parensValid(str1))
console.log(parensValid(str2))
console.log(parensValid(str3))
console.log(parensValid(str4))


//loop through string
// +1 for every opening bracket
// -1 for every closing bracket
//each time it finds a bracket, it checks to see if the value is negative
//if so it immedietly returns false
//at the end of the string, check and see if the value is 0.
//if it is not 0, return false
//else return true

/*****************************************************************************/

/* 
  Braces Valid
  Given a string sequence of parentheses, braces and brackets, determine whether it is valid. 
*/

const str1 = "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!";
const expected1 = true;

const str2 = "D(i{a}l[ t]o)n{e";
const expected2 = false;

const str3 = "A(1)s[O (n]0{t) 0}k";
const expected3 = false;
function bracesValid(str) {
  let parenthesisTrack = 0
  let curlyTrack = 0
  let squareTrack = 0
  let lastOpen = ""
  for(let i = 0; i < str.length ;i++){
    console.log(lastOpen)
    if (str[i] === "("){
      parenthesisTrack++
      lastOpen = "parenthesis"
    } 
    else if (str[i] === "{"){
      curlyTrack++
      lastOpen = "curly"
    } 
    // else if (str[i] === "["){
    //   squareTrack++
    //   lastOpen = "square"
    // }
    else if (str[i] === ")"){
      parenthesisTrack--
      if (parenthesisTrack < 0 || lastOpen != "parenthesis"){
        return false
      }
    }
    else if (str[i] === "}"){
      curlyTrack--
      if (curlyTrack < 0 || lastOpen != "curly"){
        return false
      }
    }
    // else if (str[i] === "]"){
    //   squareTrack--
    //   if (squareTrack < 0 || lastOpen != "square"){
    //     return false
    //   }
    // }
  } 

  console.log(parenthesisTrack)
  console.log(curlyTrack)
  console.log(squareTrack)

  return (parenthesisTrack === 0 && curlyTrack === 0) // && squareTrack === 0)
}
console.log(bracesValid("()"))
console.log(bracesValid("{}"))
console.log(bracesValid("({})"))
console.log(bracesValid("({)}"))
console.log(bracesValid(str1))
console.log(bracesValid(str2))
console.log(bracesValid(str3))
  


}
