/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  let cnt = 0;
  let isPrime = [];
  for (let i = 2; i < n; i++) {
      if (!isPrime[i]) cnt++;
      for (let j = i * i; j <= n; j += i) {
          isPrime[j] = true;
      }
  }
  return cnt;
};