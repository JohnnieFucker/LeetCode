/**
 * @param {number} area
 * @return {number[]}
 */
const constructRectangle = (area) => {
    let W = Math.floor(Math.sqrt(area));
    let L = area / W;
    while (area % W > 0) {
        W -= 1;
        L = area / W;
    }
    return [L, W];
};

console.log(constructRectangle(7));
