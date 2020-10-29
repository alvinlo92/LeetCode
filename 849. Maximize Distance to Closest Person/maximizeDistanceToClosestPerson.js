/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function(seats) {
  let len = seats.length
  let left = new Array(len).fill(len);
  let right = new Array(len).fill(len);
  for (let i = 0; i < seats.length; i++) {
      if (seats[i]) {
          left[i] = 0
      } else if (i > 0) {
          left[i] = left[i - 1] + 1;
      }
  }
  for (let i = seats.length - 1; i >= 0; i--) {
      if (seats[i]) {
          right[i] = 0
      } else if (i < len - 1) {
          right[i] = right[i + 1] + 1;
      }
  }
  let ans = 0;
  for (let i = 0; i < seats.length; i++) {
      if (seats[i] === 0) ans = Math.max(ans, Math.min(left[i], right[i]));
  }
  return ans;
};