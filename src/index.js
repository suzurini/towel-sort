
// You should implement your task here.

module.exports = function towelSort (matrix) {
  const arraySort = matrix.flat();
  return arraySort.toSorted((a, b) => a - b);
}