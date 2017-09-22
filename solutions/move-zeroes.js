function findFirstNoZero(nums, index) {
    for (let i = index; i < nums.length; i++) {
        if (nums[i] !== 0) {
            return i;
        }
    }
    return -1;
}
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = (nums) => {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            const j = findFirstNoZero(nums, i + 1);
            if (j > 0) {
                nums[i] = nums[j];
                nums[j] = 0;
            } else {
                return;
            }
        }
    }
};
