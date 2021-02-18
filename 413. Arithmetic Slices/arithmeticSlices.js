/**
 * @param {number[]} A
 * @return {number}
 */
var numberOfArithmeticSlices = function(A) {
  let ans = 0;
  let dp = 0;
  for (let i = 2; i < A.length; i++) {
      if (A[i] - A[i - 1] === A[i - 1] - A[i - 2]) {
          dp = 1 + dp;
          ans += dp;
      } else {
          dp = 0;
      }
  }
  return ans;
};