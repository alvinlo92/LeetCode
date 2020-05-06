/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let obj = {};
  let ele;
  let cnt = 0;
  for (let i = 0; i < nums.length; i++) {
      obj[nums[i]] ? obj[nums[i]]++ : obj[nums[i]] = 1;
      if (obj[nums[i]] > cnt) {
          ele = nums[i];
          cnt = obj[nums[i]];
      }
  }
  return ele;
};