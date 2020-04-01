/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
  let arr = str.split(' ');
  if (pattern.length !== arr.length) return false;
  for (let i = 0; i < pattern.length; i++) {
      if (pattern.indexOf(pattern[i]) !== arr.indexOf(arr[i])) return false;
  }
  return true;
};