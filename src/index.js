
// You should implement your task here.

module.exports = function towelSort(matrix) {
	let towel = [];
	if (matrix && matrix.length > 0) {
		for (let i = 0; i < matrix.length; i++) {
			if (i % 2 == 0) {
				towel.push(matrix[i])
			} else {
				towel.push(matrix[i].reverse())
			}
		} return towel.reduce((a, b) => a.concat(b));
	} else {
		return []
	}
}