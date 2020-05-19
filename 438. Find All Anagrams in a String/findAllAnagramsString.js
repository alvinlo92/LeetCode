/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  let hash = {};
  let uniq = 0;
  for (let i = 0; i < p.length; i++) {
      if (hash[p[i]] === undefined) {
          hash[p[i]] = 0;
          uniq += 1;
      }
      hash[p[i]] += 1;
  }
  let res = [];
  let left = 0, right = 0;
  for (right; right < s.length; right++) {
      if (hash[s[right]] !== undefined) {
          hash[s[right]] -= 1;
          if (hash[s[right]] === 0) uniq -= 1;
      }
      if (uniq === 0) res.push(left);
      if (right - left === p.length - 1) {
          if (hash[s[left]] !== undefined) hash[s[left]] += 1;
          if (hash[s[left]] === 1) uniq += 1;
          left += 1;
      }
  }
  return res;
};