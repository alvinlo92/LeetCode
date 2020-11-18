/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
  let ans = '';
  while (n > 0) {
      let int = n % 26 || 26;
      ans = String.fromCharCode(int + 64) + ans;
      n = Math.ceil(n / 26) - 1;
  }
  return ans;
};