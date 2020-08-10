/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  let ans = 0;
  for (let i = 0; i < s.length; i++) {
      ans += Math.pow(26, s.length - 1 - i) * (s.charCodeAt(i) - 64);
  }
  return ans;
};