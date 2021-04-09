/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
 var characterReplacement = function(s, k) {
  let ans = 0;
  let cur = 0;
  let hash = {};
  let left = 0;
  for (let right = 0; right < s.length; right++) {
      hash[s[right]] ? hash[s[right]]++ : hash[s[right]] = 1;
      cur = Math.max(cur, hash[s[right]]);
      if (right - left + 1 - cur > k) {
          hash[s[left]]--;
          left++;
      }
      ans = Math.max(ans, right - left + 1);
  }
  return ans;
};