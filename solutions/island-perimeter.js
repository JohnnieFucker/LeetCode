/**
 * @param {number[][]} grid
 * @return {number}
 */
const islandPerimeter = (grid) => {
    const r = grid.length;
    const c = grid[0].length;
    let ret = 0;
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            if (grid[i][j] === 1) {
                ret += 4;
                if (i - 1 >= 0 && grid[i - 1][j] === 1) {
                    ret--;
                }
                if (i + 1 < r && grid[i + 1][j] === 1) {
                    ret--;
                }
                if (j - 1 >= 0 && grid[i][j - 1] === 1) {
                    ret--;
                }
                if (j + 1 < c && grid[i][j + 1] === 1) {
                    ret--;
                }
            }
        }
    }
    return ret;
};
