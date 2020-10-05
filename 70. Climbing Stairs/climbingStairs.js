/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (n <= 3) return n;
  let prev = 0;
  let cur = 1;
  while (n > 0) {
      let temp = prev + cur;
      prev = cur;
      cur = temp;
      n -= 1;
  }
  return cur;
};