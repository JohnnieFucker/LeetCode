/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
const maxCount = (m, n, ops) => {
    ops.forEach((o) => {
        m = Math.min(m, o[0]);
        n = Math.min(n, o[1]);
    });
    return m * n;
};
