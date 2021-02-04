/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
  let hash = {};
  for (let num of nums) {
      hash[num] ? hash[num]++ : hash[num] = 1;
  }
  let ans = 0;
  for (let key in hash) {
      key = parseInt(key)
      if (hash[key + 1]) ans = Math.max(hash[key] + hash[key + 1], ans);
  }
  return ans;
};