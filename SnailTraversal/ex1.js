/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function(rowsCount, colsCount) {
  if ((rowsCount * colsCount) !== this.length) return [];

  let res = Array(rowsCount).fill().map(() => []);
  console.log(res);
  for (let row = 0; row < colsCount; row++)
    for (let col = 0; col < rowsCount; col++) {
      console.log(this[row * rowsCount + col], (row & 1) ? rowsCount - col - 1 : col, res[(row & 1) ? rowsCount - col - 1 : col]);
      res[(row & 1) ? rowsCount - col - 1 : col].push(this[row * rowsCount + col]);
    }


  return res;
}

const arr = [19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15]
console.log(arr.snail(5,4));
