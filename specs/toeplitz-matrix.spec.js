const isToeplitzMatrix = (matrix) => {
    for (let i = 0; i < matrix.length - 1; i++) {

        for (let j = 0; j < matrix.length - 1; j++) {

            if (matrix[i][j] !== matrix[i+1][j+1]) {

                return false;
            }
        }
    }

    return true;
}

test('Toeplitz Matrix', () => {
    expect(isToeplitzMatrix([
        [1,2,3,4,5],
        [4,1,2,3,4],
        [3,4,1,2,3],
        [2,3,4,1,2],
        [1,2,3,4,1] ])).toBe(true);

    expect(isToeplitzMatrix([
        [1,2,3,4,5],
        [4,1,2,4,5],
        [5,4,1,1,2],
        [2,3,4,1,5],
        [1,4,3,2,1] ])).toBe(false);
});