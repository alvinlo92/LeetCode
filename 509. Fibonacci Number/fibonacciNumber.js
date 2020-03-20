/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
  if (N === 0 || N === 1) return N;
  let num1 = 0;
  let num2 = 1;
  while (N > 1) {
      let sum = num1 + num2;
      num1 = num2;
      num2 = sum;
      N--;
  }
  return num2;
};