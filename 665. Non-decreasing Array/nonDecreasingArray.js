/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
  let cnt = 0;
  for (let i = 1; i < nums.length; i++) {
      if (nums[i] < nums[i - 1]) {
          if (i - 2 >= 0 && nums[i] < nums[i - 2]) {
              nums[i] = nums[i - 1];
          }
          cnt++;
      }
      if (cnt > 1) {
          return false;
      }
      
  }
  return true;
};