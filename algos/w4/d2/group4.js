/* 
  Recursive Factorial
  Input: integer
  Output: integer, product of ints from 1 up to given integer
  
  If less than zero, treat as zero.
  Bonus: If not integer, truncate (remove decimals).
  
  Experts tell us 0! is 1.
  
  rFact(3) = 6 (1*2*3)
  rFact(6.8) = 720 (1*2*3*4*5*6)
*/

const num1 = 3;
const expected1 = 6;
// Explanation: 1*2*3 = 6

const num2 = 6.8;
const expected2 = 720;
// Explanation: 1*2*3*4*5*6 = 720

const num3 = 0;
const expected3 = 1;

function factorial(n) {
  if(n < 2)return 1
  return Math.floor(n)*factorial(n-1)
}

console.log(factorial(num1))
console.log(factorial(num2))
console.log(factorial(num3))


//if num = 1
//return 1
//else
//return num*recursiv(num-1)
//floor it somewhere






/*****************************************************************************/

/* 
  Return the fibonacci number at the nth position, recursively.
  
  Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
  The next number is found by adding up the two numbers before it,
  starting with 0 and 1 as the first two numbers of the sequence.
*/

const num1 = 0;
const expected1 = 0;

const num2 = 1;
const expected2 = 1;

const num3 = 2;
const expected3 = 1;

const num4 = 3;
const expected4 = 2;

const num5 = 4;
const expected5 = 3;

const num6 = 8;
const expected6 = 21;

function fibonacci(fibNum, fibCount = 2, fib1 = 0, fib2 = 1) {
  if (fibNum < 2) return fibNum
  if (fibNum === fibCount) return fib1 + fib2
  return fibonacci(fibNum, fibCount+1, fib2, fib1+fib2)
}

console.log(fibonacci(num1))
console.log(fibonacci(num2))
console.log(fibonacci(num3))
console.log(fibonacci(num4))
console.log(fibonacci(num5))
console.log(fibonacci(num6))


//call function with default arguments fibnum, fibcount=0, fib1=0, fib2=1
//if fibnum = fibcount
//return fib1+fib2
//else
//return function(fibnum, fib2, fib1+fib2, fibcount++)