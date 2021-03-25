/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var productExceptSelf = function(nums) {
  let ans = [];
  let prod = 1;
  for (let i = 0; i < nums.length; i++) {
      ans[i] = prod;
      prod *= nums[i];
  }
  prod = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
      ans[i] *= prod;
      prod *= nums[i];
  }
  return ans;
};