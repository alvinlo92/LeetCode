/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  s = s.toLowerCase().split('').filter(char => {
      let code = char.charCodeAt(0);
      return code >= 97 && code <= 122 || code >= 48 && code <= 57;
  });
  return s.join('') === s.reverse().join('');
};