/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
  let obj = {};
  for (let row = 0; row < mat.length; row++) {
      let cnt = 0;
      for (let col = 0; col < mat[0].length; col++) {
          if (mat[row][col]) {
              cnt++;
          } else {
              break;
          }
      }
      obj[row] = cnt;
  }
  let res = Object.keys(obj).sort((a, b) => obj[a] - obj[b]);
  return res.slice(0, k);
};