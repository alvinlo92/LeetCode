/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let max = 0;
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < prices.length; i++) {
      if (prices[i] < min) {
          min = prices[i];
      } else if (prices[i] - min > max) {
          max = prices[i] - min;
      }
  }
  return max;
};