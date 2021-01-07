/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
  let nums = [];
  let cur = 1;
  while (nums.length < k) {
      if (!arr.includes(cur)) {
          nums.push(cur);
      }
      cur++;
  }
  return nums[k - 1];
};