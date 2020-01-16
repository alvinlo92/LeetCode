/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function(A, K) {
  for (let i = A.length - 1; i >= 0; i--) {
      let sum = K + A[i];
      
      if (sum >= 10) {
          A[i] = sum % 10;
          K = (sum - A[i]) / 10;
      } else {
          A[i] = sum;
          K = 0;
      }
      
      if (i === 0 && sum >= 10) {
          A.unshift(0);
          i = 1;
      }
  }
  
  return A;
};