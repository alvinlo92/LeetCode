/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
  let rLen = board.length;
  let cLen = board[0].length;
  let newBoard = [];
  for (let row = 0; row < rLen; row++) {
      let arr = [];
      for (let col = 0; col < cLen; col++) {
          let neighbor = 0;
          if (row - 1 >= 0 && col - 1 >= 0 && board[row - 1][col - 1]) neighbor++;
          if (row - 1 >= 0 && board[row - 1][col]) neighbor++;
          if (row - 1 >= 0 && col + 1 < cLen && board[row - 1][col + 1]) neighbor++;
          if (col + 1 < cLen && board[row][col + 1]) neighbor++;
          if (row + 1 < rLen && col + 1 < cLen && board[row + 1][col + 1]) neighbor++;
          if (row + 1 < rLen && board[row + 1][col]) neighbor++;
          if (row + 1 < rLen && col - 1 >= 0 && board[row + 1][col - 1]) neighbor++;
          if (col - 1 >= 0 && board[row][col - 1]) neighbor++;
          if (board[row][col]) {
              if (neighbor < 2 || neighbor > 3) {
                  arr[col] = 0
              } else {
                  arr[col] = 1;
              }
          } else {
              if (neighbor === 3) {
                  arr[col] = 1;
              } else {
                  arr[col] = 0;
              }
          }
      }
      newBoard.push(arr);
  }
  for (let row = 0; row < rLen; row++) {
      for (let col = 0; col < cLen; col++) {
          board[row][col] = newBoard[row][col];
      }
  }
};