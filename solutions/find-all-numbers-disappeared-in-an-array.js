/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDisappearedNumbers = function (nums) {
    const ret = [];
    const l = nums.length;
    for (let i = 0; i < l; i++) {
        const index = Math.abs(nums[i]) - 1;
        if (nums[index] > 0) {
            nums[index] *= -1;
        }
    }
    for (let i = 0; i < l; i++) {
        if (nums[i] > 0) {
            ret.push(i + 1);
        }
    }
    return ret;
};
console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
