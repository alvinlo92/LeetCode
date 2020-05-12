/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
      const mid = start + Math.floor((end - start) / 2);
      if (nums[mid] !== nums[mid - 1] && nums[mid] !== nums[mid + 1]) return nums[mid];
      if (nums[mid] === nums[mid - 1]) {
          if ((mid - start - 1) % 2 === 0) {
              start = mid + 1;
          } else {
              end = mid - 2;
          }
      } else {
          if ((mid - start) % 2 === 0) {
              start = mid + 2;
          } else {
              end = mid - 1;
          }
      }
  }
};