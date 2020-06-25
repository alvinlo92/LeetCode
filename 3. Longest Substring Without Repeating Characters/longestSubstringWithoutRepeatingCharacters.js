/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let hash = {};
  let largest = 0;
  let cur = 0;
  let left = 0;
  let right = 0;
  while (right < s.length) {
      if (hash[s[right]] === undefined || hash[s[right]] === 0) {
          hash[s[right]] = 1;
          cur += 1;
          right += 1;
      } else {
          hash[s[left]] -= 1;
          cur -= 1;
          left += 1;
      }
      if (cur > largest) largest = cur;
  }
  return largest;
};