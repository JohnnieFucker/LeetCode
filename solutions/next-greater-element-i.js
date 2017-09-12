/**
 * @param {number[]} findNums
 * @param {number[]} nums
 * @return {number[]}
 */
const nextGreaterElement = (findNums, nums) => {
    const ret = [];
    const l = nums.length;
    findNums.forEach((n) => {
        const index = nums.indexOf(n);
        let x = -1;
        if (index >= 0) {
            for (let i = index; i < l; i++) {
                if (nums[i] > n) {
                    x = nums[i];
                    break;
                }
            }
        }
        ret.push(x);
    });
    return ret;
};
