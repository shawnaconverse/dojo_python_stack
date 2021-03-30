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

function factorial(num) {
  // base case
  num = Math.floor(num);
  if (num < 2) {
    return 1;
  }

  // forward progress / recursive call
  return num * factorial(num - 1);
}

console.log(factorial(num1));
console.log(factorial(num2));
console.log(factorial(num3));

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

function fibonacci(num) {
  //setup
  var a = 0;
  var b = 1;
  var c = a + b;
  a = b;
  b = c;

  return c + fibonacci1(num - 1, a, b);
}

function fibonacci1(num, a, b) {
  //setup
  if (num == 0) {
    return 0;
  }
  var c = a + b;
  a = b;
  b = c;
  num = num - 1;
  return c + fibonacci1(num, a, b);
}

console.log(fibonacci(num1));
