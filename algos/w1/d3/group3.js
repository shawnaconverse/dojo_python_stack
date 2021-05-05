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
  var openparan = 0;
  var tempstr = str.split("");
  for(var i = 0; i <str.length; i++){
    if(tempstr[i] == "("){
      openparan++;
    }
    else if(tempstr[i] == ")"){
      openparan--;
    }
    if(openparan < 0){
      return false;
    }
    console.log(openparan)
  }
  console.log(openparan)
  if(openparan == 0){
    return true
  }
  else{
    return false
  }
}

var returnBool = parensValid(str3);
console.log(returnBool);

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

function bracesValid(str) {}
