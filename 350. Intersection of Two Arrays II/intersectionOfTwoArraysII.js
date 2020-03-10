/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  let hash = {};
  let res = [];
  for (let i = 0; i < nums2.length; i++) {
      hash[nums2[i]] ? hash[nums2[i]] += 1 : hash[nums2[i]] = 1;
  }
  for (let j = 0; j < nums1.length; j++) {
      if (hash[nums1[j]] > 0) {
          res.push(nums1[j]);
          hash[nums1[j]] -= 1;
      }
  }
  return res;
};