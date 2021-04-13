/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
 var minWindow = function(s, t) {
  let hash = {};
  let uniq = 0;
  for (let i = 0; i < t.length; i++) {
      if (hash[t[i]]) {
          hash[t[i]]++
      } else {
          hash[t[i]] = 1;
          uniq++;
      }
  }
  let left = 0;
  let right = 0;
  let len = Number.MAX_SAFE_INTEGER;
  let ans = "";
  while (right < s.length) {
      let char = s[right];
      if (hash[char] !== undefined) {
          hash[char]--;
          if (hash[char] === 0) uniq--;
      }
      right++;
      while (uniq === 0) {
          if (right - left < len) {
              len = right - left;
              ans = s.substring(left, right);
          }
          let leftChar = s[left];
          if (hash[leftChar] !== undefined) {
              hash[leftChar]++;
              if (hash[leftChar] > 0) uniq++;
          }
          left++;
      }
  }
  return ans;
};