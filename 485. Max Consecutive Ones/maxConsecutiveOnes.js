/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  let max = 0;
  let cur = 0;
  for (let i = 0; i < nums.length; i++) {
      nums[i] === 1 ? cur += nums[i] : cur = nums[i];
      max = Math.max(max, cur);
  }
  return max;
};