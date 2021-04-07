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
  var letters = str.split('');
  // console.log(letters)
  var openCounter = 0;
  var closedCounter =0;
  for (var i=0; i<letters.length;i++) {
      // console.log(letters[i])
      if (letters[i] == "(") {
          // console.log("Another Open Parens")
          openCounter++;
      }
      else if (letters[i] == ")") {
          // console.log("Another Closed Parens")
          closedCounter++;
      }
      if (closedCounter > openCounter) {
          return "Not Valid"
      }
  }
  if (openCounter != closedCounter) {
          return "Not Valid"
  }
  else {
      return "Valid"
  }
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

function bracesValid(str) {
  
}
