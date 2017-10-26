/**
 * @param {number[]} nums
 * @return {string[]}
 */
const findRelativeRanks = (nums) => {
    const ranks = [].concat(nums);
    ranks.sort((a, b) => (a > b ? -1 : 1));
    const result = [];
    nums.forEach((a) => {
        const i = ranks.indexOf(a);
        switch (i) {
        case 0:
            result.push('Gold Medal');
            break;
        case 1:
            result.push('Silver Medal');
            break;
        case 2:
            result.push('Bronze Medal');
            break;
        default:
            result.push((i + 1).toString());
        }
    });
    return result;
};

findRelativeRanks([5, 3, 4, 2, 1]);
