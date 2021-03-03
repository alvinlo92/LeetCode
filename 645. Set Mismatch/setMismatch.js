/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
  let obj = {};
  let dup = -1;
  let missing = 1;
  for (let num of nums) {
      obj[num] ? obj[num]++ : obj[num] = 1;
  }
  for (let i = 1; i <= nums.length; i++) {
      if (obj[i]) {
          if (obj[i] === 2) dup = i;
      } else {
          missing = i;
      }
  }
  return [dup, missing];
};