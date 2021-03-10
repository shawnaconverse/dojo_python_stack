
/* 
    Parens Valid
	Given an str that has parenthesis in it
	return whether the parenthesis are valid
*/

const str1 = " ";
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
    var x = 0
    for(i=0; i<str.length; i++){
        if(")"){
            x-=1;
        }
        if(x<0){
            return false
        }
        if("("){
            x+=1;
        }
    }
    if(x==0){
        return true;
    }
    else{
        return false;
    }
}
console.log(parensValid('N(0(p)3'))
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
    var x = 0
    for(i=0; i<str.length; i++){
        if(")" || "}" || "]"){
            x-=1;
        }
        if(x<0){
            return false
        }
        if("(" || "{" || "["){
            x+=1;
        }
    }
    if(x===0){
        return true;
    }
    else{
        return false;
    }
}
console.log(bracesValid('D(i{a}l[ t]o)n{e'))