/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
  if (s1.length > s2.length) return false;
  let hash = {};
  let uniq = 0;
  for (let i = 0; i < s1.length; i++) {
      if (hash[s1[i]] === undefined) {
          hash[s1[i]] = 0;
          uniq += 1;
      }
      hash[s1[i]] += 1;
  }
  let left = 0, right = 0;
  for (right; right < s2.length; right++) {
      if (hash[s2[right]] !== undefined) {
          hash[s2[right]] -= 1;
          if (hash[s2[right]] === 0) uniq -= 1;
      }
      if (uniq === 0) return true;
      if (right - left === s1.length - 1) {
          if (hash[s2[left]] !== undefined) hash[s2[left]] += 1;
          if (hash[s2[left]] === 1) uniq += 1;
          left++;
      }
  }
  return false;
};