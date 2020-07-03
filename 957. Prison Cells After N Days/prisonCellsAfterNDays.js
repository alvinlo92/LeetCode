/**
 * @param {number[]} cells
 * @param {number} N
 * @return {number[]}
 */
var prisonAfterNDays = function(cells, N) {
  let nextCells = [];
  N = (N - 1) % 14 + 1;
  while (N > 0) {
      for (let i = 0; i < cells.length; i++) {
          if (i === 0 || i === 7) {
              nextCells[i] = 0;
          } else if (cells[i - 1] === cells[i + 1]) {
              nextCells[i] = 1;
          } else {
              nextCells[i] = 0;
          }
      }
      let temp = nextCells;
      nextCells = cells;
      cells = temp;
      N -= 1;
  }
  return cells;
};