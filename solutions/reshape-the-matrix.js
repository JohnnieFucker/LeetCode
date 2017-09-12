/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
const matrixReshape = (nums, r, c) => {
    if (nums.length > 0 && nums[0].length > 0) {
        const eleLength = nums.length * nums[0].length;
        if (eleLength !== r * c) {
            return nums;
        }
        const ret = [];
        let row = [];
        nums.forEach((n) => {
            n.forEach((x) => {
                row.push(x);
                if (row.length === c) {
                    ret.push(row);
                    row = [];
                }
            });
        });
        return ret;
    }
    return nums;
};

console.log(matrixReshape([[1, 2], [3, 4], [5, 6]], 2, 3));
