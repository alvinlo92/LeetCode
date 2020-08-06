/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
  let res = [];
  for (let i = 0; i < nums.length; i++) {
      let pos = Math.abs(nums[i]) - 1;
      if (nums[pos] < 0) res.push(pos + 1);
      nums[pos] = -nums[pos];
  }
  return res;
};