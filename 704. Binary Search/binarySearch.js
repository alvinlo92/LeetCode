/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  if (!nums || !nums.length) return -1;
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
      let mid = Math.floor((right - left) / 2) + left;
      if (target < nums[mid]) {
          right = mid - 1;
      } else if (target > nums[mid]) {
          left = mid + 1;
      } else {
          return mid;
      }
  }
  return -1;
};