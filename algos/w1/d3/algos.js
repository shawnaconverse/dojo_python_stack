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

var count = 0 // count++ or count--
var stack = [] // we can only use .push() or .pop()
function parensValid(str) {
  var count = 0
  for(var i = 0; i < str.length; i++){
    if(str[i]=="("){
      count++;
    }
    if(str[i]==")" && count == 0){
      return false;
    } else if(str[i] == ")"){
      count--;
    }
  }
  if(count==0){
    return true;
  } else{
    return false;
  }
}

/*****************************************************************************/

/* 
  Braces Valid
  Given a string sequence of parentheses, braces and brackets, determine whether it is valid. 
*/
// { - 
// [ - 
// ( - 
const str1 = "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!";
const expected1 = true;

const str2 = "D(i{a}l[ t]o)n{e";
const expected2 = false;

const str3 = "A(1)s[O (n]0{t) 0}k";
const expected3 = false;
// stack = ["[", "("]
function bracesValid(str) {
  // SETUP
  var stack = [];
  var opens = "([{";
  var closeToOpen = {
    ")": "(",
    "]": "[",
    "}": "{"
  }

  // WORK
  // loop through string
  for (var i = 0; i < str.length; i++) {
    // check if opening braces and push to stack if it is
    if (opens.includes(str[i])) {
      stack.push(str[i]);
    // if not opening brace, then check if its a closing brace
    } else if (str[i] in closeToOpen) {
      // check using closeToOpen if the type of closing brace matches what is at the end of the stack
      if (closeToOpen[str[i]] === stack[stack.length - 1]) {
        stack.pop()
      // if mismatched current string character brace type and what is at the end of the stack, return false
      } else {
        return false;
      }
    }
  }

  // RETURN
  return stack.length === 0;
}
