/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function(nums, k) {
  if (!nums.length || !k) return true;
  let idx = 0;
  let cnt = 0;
  while (idx < nums.length) {
      if (nums[idx] === 1) {
          idx++;
          while (nums[idx] === 0) {
              idx++;
              cnt++;
          }
          if (idx !== nums.length && cnt < k) return false;
          cnt = 0;
      } else {
          idx++;
      }
  }
  return true;
};