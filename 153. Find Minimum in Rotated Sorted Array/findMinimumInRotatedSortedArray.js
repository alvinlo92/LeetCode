/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  let min = nums[0];
  
  for (var i = 1; i < nums.length; i++) {
      if (nums[i] < min) {
          min = nums[i];
          break;
      }
  }
  
  return min;
};
