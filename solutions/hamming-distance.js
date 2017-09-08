// /**
//  * @param {number} x
//  * @param {number} y
//  * @return {number}
//  */
// const hammingDistance = (x, y) => {
//     if (x === y) {
//         return 0;
//     }
//     let big = x > y ? x : y;
//     let small = x > y ? y : x;
//     big = big.toString(2);
//     small = small.toString(2);
//     const l = big.length - small.length;
//     let distance = 0;
//     for (let i = 0; i < l; i++) {
//         small = `0${small}`;
//     }
//     for (let i = 0; i < big.length; i++) {
//         if (small[i] !== big[i]) {
//             distance++;
//         }
//     }
//     return distance;
// };
// const hammingDistance = (x, y) => {
//     if (x === y) {
//         return 0;
//     }
//     const ret = x ^ y;
//     return ret.toString(2).replace('0', '').length;
// };
const hammingDistance = (x, y) => {
    if (x === y) {
        return 0;
    }
    const ret = (x ^ y).toString(2);
    let distance = 0;
    for (let i = 0; i < ret.length; i++) {
        if (ret[i] === '1') {
            distance++;
        }
    }

    return distance;
};
console.log(hammingDistance(4, 1));
