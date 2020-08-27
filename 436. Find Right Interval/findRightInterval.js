/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
var findRightInterval = function(intervals) {
  let res = [];
  for (let i = 0; i < intervals.length; i++) {
      for (let j = 0; j < intervals.length; j++) {
          if (i !== j) {
              if (intervals[i][1] <= intervals[j][0]) {
                  if (res[i] === undefined || intervals[res[i]][0] > intervals[j][0]) {
                      res[i] = j;
                  }
              }
          }
      }
      if (res[i] === undefined) res[i] = -1;
  }
  return res;
};