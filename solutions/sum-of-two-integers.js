/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
const getSum = (a, b) => {
    if (b === 0) return a;
    let sum = a ^ b; // eslint-disable-line
    let carry = (a & b) << 1; // eslint-disable-line
    return getSum(sum, carry);
};
