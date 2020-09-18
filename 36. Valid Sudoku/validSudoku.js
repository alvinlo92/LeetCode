/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  let hash = {};
  for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
          if (board[row][col] !== ".") {
              if (hash[board[row][col]]) {
                  return false;
              } else {
                  hash[board[row][col]] = true;
              }
          }
      }
      hash = {};
  }
  for (let col = 0; col < 9; col++) {
      for (let row = 0; row < 9; row++) {
          if (board[row][col] !== ".") {
              if (hash[board[row][col]]) {
                  return false;
              } else {
                  hash[board[row][col]] = true;
              }
          }
      }
      hash = {};
  }
  for (let row = 0; row < 9; row += 3) {
      for (let col = 0; col < 9; col += 3) {
          for (let x = row; x < row + 3; x++) {
              for (let y = col; y < col + 3; y++) {
                  if (board[x][y] !== ".") {
                      if (hash[board[x][y]]) {
                          return false;
                      } else {
                          hash[board[x][y]] = true;
                      }
                  }
              }
          }
          hash = {};
      }
      hash = {};
  }
  return true;
};