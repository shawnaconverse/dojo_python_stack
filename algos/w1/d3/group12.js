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

function parensValid(str) {}

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



// var validBraces = (s) => {
//   let objO  = {'(': 0, '[': 1, '{': 2};
//   let objC  = {')': 0, ']': 1, '}': 2};
//   let stack = [];

//   for (let i=0; i<s.length; i++) {
//       if (objO.hasOwnProperty(s[i])) {
//           if (stack.length === 0 || stack[stack.length-1].idx!==objO[s[i]])
//               stack.push({idx: objO[s[i]], count: 1});
//           else
//               stack[stack.length-1].count++;
//       }
//       else if (objC.hasOwnProperty(s[i])) {
//           if (stack.length === 0 || stack[stack.length-1].idx!==objC[s[i]])
//               return false;
//           else {
//               stack[stack.length-1].count--;
//               if (stack[stack.length-1].count===0)
//                   stack.pop();
//           }
//       }
//   }
//   return stack.length === 0;
// };

// console.log(validBraces("Y(3(p)p(3))rs"))