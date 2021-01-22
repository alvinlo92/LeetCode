/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var mostCompetitive = function(nums, k) {
  let stack = [];
  let rem = nums.length - k;
  for (let num of nums) {
      while (num < stack[stack.length - 1] && rem) {
          rem--;
          stack.pop();
      }
      stack.push(num);
  }
  while (stack.length > k) {
      stack.pop();
  }
  return stack;
};