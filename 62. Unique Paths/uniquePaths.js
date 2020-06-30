/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  let board = [[1]];
  for (let i = 1; i < n; i++) {
      board[0][i] = 1;
  }
  for (let j = 1; j < m; j++) {
      board[j] = [1];
  }
  console.log(board)
  for (let r = 1; r < m; r++) {
      for (let c = 1; c < n; c++) {
          board[r][c] = board[r - 1][c] + board[r][c - 1];
      }
  }
  return board[m - 1][n - 1];
};