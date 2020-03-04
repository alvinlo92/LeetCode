/**
 * @param {number} n
 * @return {number}
 */
var integerReplacement = function(n) {
  let times = [];
  
  var traverser = function(count, n) {
      if (n === 1) {
          times.push(count);
      } else if (n % 2 === 0) {
          return traverser(count + 1, n / 2)
      } else {
          traverser(count + 1, n + 1);
          traverser(count + 1, n - 1);
      }
  }
  
  traverser(0, n);
  
  return Math.min(...times);
};
