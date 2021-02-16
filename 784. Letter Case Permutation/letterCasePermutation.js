/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function(S) {
  let ans = [];
  let upperA = "A".charCodeAt();
  let upperZ = "Z".charCodeAt();
  let lowerA = "a".charCodeAt();
  let lowerZ = "z".charCodeAt();
  var helper = function(str, i) {
      if (i === S.length) {
          ans.push(str);
          return;
      }
      let code = S.charCodeAt(i);
      if (code >= upperA && code <= upperZ || code >= lowerA && code <= lowerZ) {
          helper(str + S[i].toLowerCase(), i + 1);
          helper(str + S[i].toUpperCase(), i + 1);
      } else {
          helper(str + S[i], i + 1);
      }
  }
  helper("", 0);
  return ans;
};