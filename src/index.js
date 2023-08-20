
// You should implement your task here.

module.exports = function towelSort (matrix) {
  const arraySort = concat(matrix[0], matrix[1], matrix[2]);
  arraySort.sort();
  return arraySort;
}
