/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
  let ans = [];
  let hash = {};
  let majCnt = Math.floor(nums.length / 3) + 1;
  for (let i = 0; i < nums.length; i++) {
      hash[nums[i]] ? hash[nums[i]] += 1 : hash[nums[i]] = 1;
      if (hash[nums[i]] === majCnt) ans.push(nums[i]);
  }
  return ans;
};