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
  let rightParen = 0;
  let leftParen = 0;
  for (let letter of str) {
    if (rightParen > leftParen) {
      return false;
    } else {
      if (letter === "(") {
        ++leftParen;
      } else if (letter === ")") {
        ++rightParen;
      }
    }
  }
  if (leftParen === rightParen) {
    return true;
  }
  return false;
}

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

const str4 = "a(1{2}{3 3})";

function bracesValid(str) {
  let counter = 0
  let strArr = str.split("");

  for (let letter of strArr) {
    if (letter === {) {
    } else {
    }
  }
}
