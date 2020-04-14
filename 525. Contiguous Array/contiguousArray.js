/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
  let hash = {0: -1};
  let maxLen = 0;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
      nums[i] === 0 ? count-- : count++;
      hash[count] !== undefined ? maxLen = Math.max(maxLen, i - hash[count]) : hash[count] = i;
  }
  return maxLen;
};