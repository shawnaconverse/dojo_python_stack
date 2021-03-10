 
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
//   Explanation: because the underlined ")" is premature: there is nothing open for it to close.
  
const   str4 = "a(b))(c";
const   expected4 = false;
// Exp  lanation: same number of opens and closes but the 2nd closing closes nothing
  
  
functi  on parensValid(str) {
    count   = 0;
    fo  r(i = 0; i < str.length; i++){
          if (str[i] == '('){
              count ++;
        }  
        el  se if (str[i] == ')' && count > 0){
              count --;
        }  
    }  
    if  (count%2 == 0){
          return true;
      }
    el  se{
          return false;
      }
  }

console.log(parensValid(str1));
console.log(parensValid(str2));
console.log(parensValid(str3));
console.log(parensValid(str4));

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
    count1 = 0
    count2 = 0
    count3 = 0
    for(i = 0; i < str.length; i++){
        if (str[i] == '('){
            count1 ++;
        }
        else if (str[i] == ')' && count1 > 0){
            count1 --;
        }
        else if (str[i] == '['){
            count2 ++;
        }
        else if (str[i] == ']' && count2 > 0){
            count2 --;
        }
        else if (str[i] == '{'){
            count3 ++;
        }
        else if (str[i] == '}' && count3 > 0){
            console.log(str[i]);
            console.log(count3);
            count3 --;
        }
    }
    if(count1 == 0 && count2 == 0 && count3 == 0){
        return true;
    }
    else{
        return false;
    }
}

console.log(bracesValid(str1));
console.log(bracesValid(str2));
console.log(bracesValid(str3));