/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  let hash = {};
  for (let i = 0; i < s.length; i++) {
      hash[s[i]] === undefined ? hash[s[i]] = 1 : hash[s[i]] += 1;
  }
  for (let j = 0; j < s.length; j++) {
      if (hash[s[j]] === 1) return j;
  }
  return -1;
};