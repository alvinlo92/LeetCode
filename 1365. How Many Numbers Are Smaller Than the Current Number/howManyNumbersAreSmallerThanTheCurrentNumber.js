/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
  let sorted = [...nums].sort((a, b) => a - b);
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
      arr.push(sorted.indexOf(nums[i]));
  }
  return arr;
};