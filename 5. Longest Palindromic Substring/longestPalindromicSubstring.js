/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
  if (!s.length) return "";
  let start = 0;
  let end = 0;
  const helper = function(left, right) {
      if (s === "" || left > right) return 0;
      while (left >= 0 && right < s.length && s.charAt(left) === s.charAt(right)) {
          left--;
          right++;
      }
      return right - left - 1;
  }
  for (let i = 0; i < s.length; i++) {
      let len1 = helper(i, i);
      let len2 = helper(i, i + 1);
      let len = Math.max(len1, len2);
      if (len > end - start) {
          start = i - Math.floor((len - 1) / 2);
          end = i + Math.floor(len / 2);
      }
  }
  return s.substring(start, end + 1);
};