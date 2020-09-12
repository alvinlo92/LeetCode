/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let res = nums[0];
  let min = nums[0];
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
      let num = nums[i];
      [min, max] = [Math.min(num, num * min, num * max), Math.max(num, num * min, num * max)]
      res = Math.max(res, max);
  }
  return res;
};