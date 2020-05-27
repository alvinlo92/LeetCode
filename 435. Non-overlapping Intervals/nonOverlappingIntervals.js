/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
  if (intervals.length <= 1) return 0;
  let cnt = 0;
  intervals.sort((a, b) => a[1] - b[1]);
  let prev = intervals[0][1];
  for (let i = 1; i < intervals.length; i++) {
      let first = intervals[i][0];
      let second = intervals[i][1];
      if (first >= prev) {
          prev = second;
      } else {
          cnt++;
          second = Math.min(prev, second);
      }
  }
  return cnt;
};