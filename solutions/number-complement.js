/**
 * @param {number} num
 * @return {number}
 */
const findComplement = num => parseInt(num.toString(2).replace(/1/g, 'a').replace(/0/g, 'b').replace(/a/g, 0).replace(/b/g, 1), 2);

console.log(findComplement(5));
