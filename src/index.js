module.exports = function towelSort (matrix) {
        if (!matrix || matrix.length === 0) return [];
        return matrix.reduce((result, row, index) => {
            if (index % 2 === 0) {
                result = result.concat(row);
            } else {
                result = result.concat(row.reverse());
            }
            return result;
        }, []);
    }
