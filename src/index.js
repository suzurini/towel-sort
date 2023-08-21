
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let i = 0;
  let sortMatrix = [];
  if (matrix) {
    while (i < matrix.length) {
      if (i % 2 == 0) {
        matrix[i] = matrix[i].sort((a, b) => a - b);
      }
      else {
        matrix[i] = matrix[i].sort((a, b) => a - b).reverse();
      }
      i++;
    }
    sortMatrix = matrix.flat();
  }
  // const sortMatrix = matrix[0].concat(matrix[1], matrix[2]);
  return sortMatrix;
}