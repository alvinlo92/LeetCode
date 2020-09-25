/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
  nums = nums.sort((a, b) => `${b}${a}` - `${a}${b}`).join('');
  return nums == 0 ? "0" : nums;
};