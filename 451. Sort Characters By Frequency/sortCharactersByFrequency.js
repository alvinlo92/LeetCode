/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
  let hash = {};
  for (let i = 0; i < s.length; i++) {
      !hash[s[i]] ? hash[s[i]] = 1 : hash[s[i]] += 1;
  }
  let arr = Object.entries(hash).sort((a, b) => b[1] - a[1]);
  let str = "";
  for (let j = 0; j < arr.length; j++) {
      for (let k = arr[j][1]; k > 0; k--) {
          str += arr[j][0];
      }
  }
  return str;
};