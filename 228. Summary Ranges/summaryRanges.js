/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  if (nums.length < 1) return [];
  let res = [];
  let start = 0;
  for (let end = 0; end < nums.length; end++) {
      if (nums[end] + 1 !== nums[end + 1]) {
          start === end ? res.push(`${nums[start]}`) : res.push(`${nums[start]}->${nums[end]}`);
          start = end + 1;
      }
  }
  return res;
};