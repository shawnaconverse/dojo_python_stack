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
  // BASE CASE
  // FORWARD PROGRESS
  // RECURSIVE CALLS
}

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

const num6 = 50;
const expected6 = 12586269025;


function fibonacci(num) {
  if (num <= 0) return 0;
  if (num < 2) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
}


// memoization
function fibMemoized(n, memo = {0: 0, 1: 1}) {
  // EDGE CASE
  if (n < 0) return null;

  // BASE CASE
  if (memo[n] !== undefined) {
    return memo[n];
  }

  memo[n] = fibMemoized(n - 1, memo) + fibMemoized(n - 2, memo);

  return memo[n];
}
// Python version
// def fib(n, memo = {"0": 0, "1": 1}):
//   if (n < 0):
//     return None
  
//   if str(n) in memo:
//     return memo[str(n)]
  

//   memo[str(n)] = fib(n - 1, memo) + fib(n - 2, memo)

//   return memo[str(n)]
