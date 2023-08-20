
// You should implement your task here.

module.exports = function towelSort (matrix) {
  matrix[0] = matrix[0].sort((a, b) => a - b);
  matrix[1] = matrix[1].sort((a, b) => a - b);
  matrix[2] = matrix[2].sort((a, b) => a - b);
  matrix = matrix.flat()
  // const arraySort = matrix.flat();
  return matrix;
}