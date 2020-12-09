/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function(time) {
  let remainder = new Array(60).fill(0);
  let cnt = 0;
  for (let t of time) {
      if (t % 60 == 0) {
          cnt += remainder[0];
      } else {
          cnt += remainder[60 - t % 60];
      }
      remainder[t % 60]++;
  }
  return cnt;
};