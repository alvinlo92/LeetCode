/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
      if (hash[nums[i]]) {
          hash[nums[i]] += 1;
      } else {
          hash[nums[i]] = 1;
      }
  }
  for (let val in hash) {
      if (hash[val] === 1) {
          return val;
      }
  }
};