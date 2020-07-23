/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
  nums.sort();
  let ele = [];
  for (let i = 0; i < nums.length; i++) {
      nums[i] !== nums[i + 1] ? ele.push(nums[i]) : i++;
  }
  return ele;
};