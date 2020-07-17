/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  nums.sort((a, b) => a - b);
  let obj = {};
  let cnt = 1;
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== nums[i + 1]) {
          obj[nums[i]] = cnt;
          cnt = 1;
      } else {
          cnt++;
      }
  }
  let arr = [];
  for (let key in obj) {
      arr.push([key, obj[key]]);
  }
  arr.sort((a, b) => b[1] - a[1]);
  let res = [];
  for (let i = 0; i < k; i++) {
      res.push(arr[i][0]);
  }
  return res;    
};