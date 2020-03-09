/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  let length = nums.length;
  while(length !== 0) {
      for (let i = 0; i < length; i++) {
          if (nums[i] > nums[i + 1]) {
              let temp = nums[i + 1];
              nums[i + 1] = nums[i];
              nums[i] = temp;
          }
      }
      length--;
  }
  return nums[nums.length - k];
};