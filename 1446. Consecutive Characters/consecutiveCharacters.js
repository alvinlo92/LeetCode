/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
  let max = 1;
  let cur = 1;
  let char = s[0];
  for (let i = 1; i < s.length; i++) {
      if (s[i] === char) {
          cur++;
      } else {
          cur = 1;
          char = s[i];
      }
      max = Math.max(cur, max);
  }
  return max;
};