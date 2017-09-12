/**
 * @param {number[]} candies
 * @return {number}
 */
const distributeCandies = (candies) => {
    const max = Math.floor(candies.length / 2);
    const unique = (new Set(candies)).size;
    return max > unique ? unique : max;
};
console.log(distributeCandies([1, 1, 1, 1, 2, 2, 2, 3, 3, 3]));
