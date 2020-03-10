/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  var remover = function(start, end) {
      if (nums[start] === nums[end]) {
          return remover(start, end + 1);
      } else {
          return end - start - 1;
      }
  }
  for (let i = 0; i < nums.length; i++) {
      let delCnt = remover(i, i + 1);
      nums.splice(i, delCnt);
  }
  return nums.length;
};