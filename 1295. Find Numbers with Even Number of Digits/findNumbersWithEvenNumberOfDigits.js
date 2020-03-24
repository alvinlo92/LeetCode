/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
  let ans = 0;
  for (let i = 0; i < nums.length; i++) {
      if (nums[i].toString().length % 2 === 0) ans++;
  }
  return ans;
};