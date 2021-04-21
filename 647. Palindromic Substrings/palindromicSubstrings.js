/**
 * @param {string} s
 * @return {number}
 */
 var countSubstrings = function(s) {
  let ans = 0;
  const helper = function(left, right) {
      while (left >= 0 && right < s.length && s[left] === s[right]) {
          ans++;
          left--;
          right++;
      }
  }
  for (let i = 0; i < s.length; i++) {
      helper(i, i);
      helper(i, i + 1);
  }
  return ans;
};