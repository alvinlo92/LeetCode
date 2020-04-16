/**
 * @param {number[]} arr
 * @return {number}
 */
var countElements = function(arr) {
  let sorted = arr.sort((a, b) => b - a);
  let cnt = 0;
  let hash = {};
  for (let i = 0; i < sorted.length; i++) {
      if (hash[sorted[i] + 1]) cnt += 1;
      if (!hash[sorted[i]]) hash[sorted[i]] = true;
  }
  return cnt;
};