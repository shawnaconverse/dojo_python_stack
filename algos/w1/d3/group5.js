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
  var countOpen = 0;
  var countClose = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] == ")") {
      countClose += 1;
    } else if (str[i] == "(") {
      countOpen += 1;
    }
    if (countClose > countOpen) {
      return false;
    }
  }
  if (countOpen == countClose) {
    return true;
  } else {
    return false;
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
// for loop through the entire string
// if we encounter a close first return false
// either a while loop or for loop where we start tracking conditions when we encounter at open
// 
function bracesValid(str) { // doesn't work for improper groupings
  var ref = {
    "(":0,
    "[":0,
    "{":0,
    ")":0,
    "]":0,
    "}":0,
  }
  for (var i = 0; i < str.length; i++) {
    if (str[i] == "(") {
      ref["("] += 1;
    } else if (str[i] == "[") {
      ref["["] += 1;
    } else if (str[i] == "{") {
      ref["{"] += 1;
    } else if (str[i] == ")") {
      ref[")"] += 1
    } else if (str[i] == "]") {
      ref["]"] += 1;
    } else if (str[i] == "}") {
      ref["}"] += 1;
    }
    if (ref[")"] > ref["("] || ref["]"] > ref["["] || ref["}"] > ref["{"]) {
      return false;
    }
  }
  if (ref["("] == ref[")"] && ref["["] == ref["]"] && ref["{"] == ref["}"]) {
    return true;
  }
  else {
    return false;
  }
}
