/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  if (!s.length) return 0;
  let a = s.trim().split(' ');
  return a[a.length - 1].length;
};