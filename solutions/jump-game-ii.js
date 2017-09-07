const max = (a, b) => (a >= b ? a : b);
/**
 * @param {number[]} nums
 * @return {number}
 */
const jump = (nums) => {
    const length = nums.length;
    let step = 0;
    let start = 0;
    let end = 0;
    while (end < length - 1) {
        step++;
        let maxend = end + 1;
        for (let i = start; i <= end; i++) {
            if (i + nums[i] >= length - 1) return step;
            maxend = max(maxend, i + nums[i]);
        }
        start = end + 1;
        end = maxend;
    }
    return step;
};
