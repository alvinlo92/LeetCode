/**
 * @param {number[]} A
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function(A, queries) {
  let ans = [];
  let sum = 0;
  for (let i = 0; i < A.length; i++) {
      if (A[i] % 2 === 0) sum += A[i];
  }
  for (let j = 0; j < queries.length; j++) {
      let idx = queries[j][1]
      let val = queries[j][0];
      if (A[idx] % 2 === 0) sum -= A[idx];
      A[idx] += val;
      if (A[idx] % 2 === 0) sum += A[idx];
      ans.push(sum);
  }
  return ans;
};