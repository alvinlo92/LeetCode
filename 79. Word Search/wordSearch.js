/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  let found = false;
  var traverser = function(row, col, i) {
      if (found) return;
      if (board[row][col] === word[i]) {
          let char = board[row][col];
          board[row][col] = 0;
          i++;
          if (i === word.length) {
              found = true;
              return;
          }
          if (row + 1 < board.length) traverser(row + 1, col, i);
          if (row - 1 >= 0) traverser(row - 1, col, i);
          if (col + 1 < board[0].length) traverser(row, col + 1, i);
          if (col - 1 >= 0) traverser(row, col - 1, i);
          board[row][col] = char;
      }
  }
  for (let r = 0; r < board.length; r++) {
      for (let c = 0; c < board[0].length; c++) {
          if (board[r][c] === word[0]) traverser(r, c, 0);
          if (found) return true;
      }
  }
  return false;
};