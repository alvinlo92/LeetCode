/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
  if (board.length === 0 || board[0].length === 0) return board;
  
  var flipper = function(R, C) {
      board[R][C] = "K";
      if (R - 1 >= 0 && board[R - 1][C] === "O") flipper(R - 1, C);
      if (R + 1 <= board.length - 1 && board[R + 1][C] === "O") flipper(R + 1, C);
      if (C - 1 >= 0 && board[R][C - 1] === "O") flipper(R, C - 1);
      if (C + 1 <= board[R].length - 1 && board[R][C + 1] === "O") flipper(R, C + 1);
  }
  
  for (let i = 0; i < board.length; i++) {
      if (board[i][0] === "O") flipper(i, 0);
      if (board[i][board[0].length - 1] === "O") flipper(i, board[0].length - 1);
  }

  for (let j = 0; j < board[0].length; j++) {
      if (board[0][j] === "O") flipper(0, j);
      if (board[board.length - 1][j] === "O") flipper(board.length - 1, j);
  }

  for (let row = 0; row < board.length; row++) {
      for (let col = 0; col < board[row].length; col++) {
          if (board[row][col] === "O") {
              board[row][col] = "X";
          } else if (board[row][col] === "K") {
              board[row][col] = "O";
          }
      }
  }

  return board;
};