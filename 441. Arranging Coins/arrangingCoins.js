/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
  for (let i = 0; i <= n; i++) {
      n -= i;
      if (n < i + 1) return i;
  }
};