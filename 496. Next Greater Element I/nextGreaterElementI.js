/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
  let ans = [];
  for (let i = 0; i < nums1.length; i++) {
      let j = nums2.indexOf(nums1[i]);
      for (; j < nums2.length; j++) {
          if (nums1[i] < nums2[j]) {
              ans[i] = nums2[j];
              break;
          }
      }
      if (!ans[i]) ans[i] = -1;
  }
  return ans;
};