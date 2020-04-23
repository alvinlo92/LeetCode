/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let hash = {};
  for (let i = 0; i < strs.length; i++) {
      let str = strs[i].split('').sort().join('');
      !hash[str] ? hash[str] = [strs[i]] : hash[str].push(strs[i]);
  }
  return Object.values(hash);
};