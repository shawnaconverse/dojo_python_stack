/* 
  Parens Valid
	Given an str that has parenthesis in it
	return whether the parenthesis are valid
*/

const str1 = "Y(3(p)p(3)r)s"; // array: (()())
const expected1 = true;

const str2 = "N(0(p)3"; // array: (()
const expected2 = false;
// Explanation: not every parenthesis is closed.

const str3 = "N(0)t ) 0(k"; // array: ())(
const expected3 = false;
// Explanation: because the underlined ")" is premature: there is nothing open for it to close.

const str4 = "a(b))(c";
const expected4 = false;
// Explanation: same number of opens and closes but the 2nd closing closes nothing

const str4 = "a(b))c";
const expected4 = false;

const str4 = "()))";
const expected4 = false;

  function parensValid(str) {
    parensArr = [];
    for (var i = 0; i < str.length; i++){
        if (str[i] == "(" || str[i] == ")"){
        parensArr.push(str[i])
        }
    }
    if (parensArr[parensArr.length - 1] == "(" || parensArr[0] == ")"){
        return false
    }
    else if (parensArr.length % 2 == 1){ // if number of parens is odd
        return false
    }
    else{  // number of parens is even && the last one is not opening
        var openingCounter = 0;
        var closingCounter = 0;
        for (var i = 0; i < parensArr.length; i++){
            if (parensArr[i] == "("){
                openingCounter++;
            }
            else{
                closingCounter++;
            }
        }
        if (openingCounter != closingCounter){
            return false
        }
        else{
            return true
        }
    }
}

var str1 = "Y(3(p)p(3)r)s";
console.log(parensValid(str1))

var str2 = "N(0(p)3";
console.log(parensValid(str2))

var str3 = "N(0)t ) 0(k";
console.log(parensValid(str3))

var str4 = "a(b))(c";
console.log(parensValid(str4))

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
