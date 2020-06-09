/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  if (!s.length) return true;
  let cur = 0;
  for (let i = 0; i < t.length; i++) {
      if (t[i] === s[cur]) cur++;
      if (cur === s.length) return true;
  }
  return false;
};