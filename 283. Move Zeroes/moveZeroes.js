/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let slow = 0;
  let fast = 1;
  while (fast < nums.length) {
      if (nums[slow] === 0) {
          while (fast < nums.length && nums[fast] === 0) {
              fast++;
          }
          if (fast === nums.length) return nums;
          nums[slow] = nums[fast];
          nums[fast] = 0;
      }
      slow++;
      fast++;
  }
  return nums;
};