/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  let len = 0;
  let chars = {};
  for (let i = 0; i < s.length; i++) {
      chars[s[i]] ? chars[s[i]] += 1 : chars[s[i]] = 1;
  }
  let odd = 0;
  for (let key in chars) {
      if (chars[key] % 2 === 0) {
          len += chars[key];
      } else {
          len += chars[key] - (chars[key] % 2);
          odd = 1;
      }
  }
  return len + odd;
};