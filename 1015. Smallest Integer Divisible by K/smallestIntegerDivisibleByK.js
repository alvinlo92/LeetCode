/**
 * @param {number} K
 * @return {number}
 */
var smallestRepunitDivByK = function(K) {
  if (K % 2 === 0 || K % 5 === 0) return -1;
  let rem = 0;
  for (let N = 1; N <= K; N++) {
      rem = (rem * 10 + 1) % K;
      if (rem === 0) return N;
  }
  return -1;
};