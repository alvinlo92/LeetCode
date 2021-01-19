/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
  let cnt = 0;
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
      let diff = k - nums[i];
      if (hash[diff]) {
          cnt++;
          hash[diff]--;
      } else {
          if (hash[nums[i]]) {
              hash[nums[i]]++;
          } else {
              hash[nums[i]] = 1;
          }
      }
  }
  return cnt;
};