  
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

// Stack
// [] => .push()  .pop()  => ADDS OR REMOVES FROM THE END OF THE ARRAY
// Number
// 0 represents no opening parans

function parensValid(str) {
    var paransStack = [];
    // LOOP through the string
    for (var char of str) {
        if (char == "(") {
            paransStack.push(char);
        } else if (char == ")") {
            if (paransStack.length === 0) {
                return false;
            } else {
                paransStack.pop()
            }
        }
    }
    // if (paransStack.length === 0) {
    //     return true;
    // } else {
    //     return false;
    // }
    return paransStack.length == 0;
    // return true
    // return false
}
//"42" == 42 // true - Value only comparison
//"42" === 42 // false - type and value - PYTHON WORKS LIKE THIS



/*****************************************************************************/


/* 
    Braces Valid
    Given a string sequence of parentheses, braces and brackets, determine whether it is valid. 
*/

const str1 = "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!";
const expected1 = true;

const str2 = "D(i{a}l[ t]o)n{e";
const expected2 = false;

// ignore 
// const str3 = "A(1)s[O (n]0{t) 0}k";
// const expected3 = false

// stak, counting number
function bracesValid(str) {
    var stack = [];
    var opens = "({[";
    var closeToOpen = {")": "(", "}": "{", "]": "["};

    for (var i = 0; i < str.length; i++) {
        // includes() is just a for loop
        if (opens.includes(str[i])) {
            stack.push(str[i]);
        } else if (str[i] in closeToOpen) { // is the current char a key in the object
            if (closeToOpen[str[i]] === stack[stack.length - 1]) { // char = "[" then closeToOpen[char] = "]"
                stack.pop();
            } else {
                return false;
            }
        }
    }

    return stack.length === 0;
}
