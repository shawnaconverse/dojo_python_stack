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
  for(var i = 0; i < str.length; i++);
    count = 0
    openP = '('
    closeP = ')'
    if (str[i] = '()'){
      count ++
    }
    if (count % 2 == 0){
      return true
    }
    else{
      return false
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
  newString = []
  for(var i = 0; i < str.length; i++);
    if(str[i] == '(' || str[i] == '[' || str[i] == '{'){
      newString.push(str[i]);
    }else if(str[i] == ')' || str[i] == ']' || str[i] == '}'){
      newString.push(str[i]);
    }console.log(newString)
}

bracesValid(str3)

/*isolate the parenthesis
determine if they open and close with no other interuptions
determine if there is a closing parenthesis that doesn't match the opening
if it doesn't match then return false
