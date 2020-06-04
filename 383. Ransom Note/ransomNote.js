/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  let hash = {};
  let uniq = 0;
  for (let i = 0; i < ransomNote.length; i++) {
      if (hash[ransomNote[i]] === undefined) {
          hash[ransomNote[i]] = 1;
          uniq += 1;
      } else {
          hash[ransomNote[i]] += 1;
      }
  }
  for (let i = 0; i < magazine.length; i++) {
      if (hash[magazine[i]] !== undefined) {
          hash[magazine[i]] -= 1;
          if (hash[magazine[i]] === 0) {
              uniq -= 1;
          }
      }
  }
  return uniq <= 0;
};