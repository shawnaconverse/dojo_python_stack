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
  // Edge Case - given something that isnt a number
  if (isNaN(parseInt(n))) {
    return null;
  }
  n = Math.floor(n);

  // Base Case
  if (n <= 1) {
    return 1;
  }
  // Forward progress / recursive call
  return n * factorial(n - 1);
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

const num6 = 8;
const expected6 = 21;

function fibonacci(n) {
  // Edge Case
  if (n < 0) {
    return null;
  }
  // Base Case
  if (n < 2) {
    return n;
  }
  // Forward progress / recursive call
  return fibonacci(n - 1) + fibonacci(n - 2);
}

/* Memoization
 * In computing, memoization or memoisation is an optimization technique used
 * primarily to speed up computer programs by storing the results of expensive
 * function calls and returning the cached result when the same inputs occur
 * again.
 */

function fibMemo(n, memo = { 0: 0, 1: 1 }) {
  if (n < 0) {
    return null;
  }

  if (memo[n] !== undefined) {
    return memo[n];
  }

  memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);

  return memo[n];
}

memo = {
  0: 0,
  1: 1,
  2: 1,
  3: 2,
  4: 3,
  5: 5,
  6: 8,
  7: 13,
  8: 21,
};
