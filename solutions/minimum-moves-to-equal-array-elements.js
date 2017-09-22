// const sortNums = nums => nums.sort((a, b) => (a >= b ? 1 : -1));
// const isSame = nums => nums[nums.length - 1] === nums[0];
// const opNums = (nums) => {
//     nums[nums.length - 1] -= 1;
//     return nums;
// };
//
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// const minMoves = (nums) => {
//     let count = 0;
//     nums = sortNums(nums);
//     while (!isSame(nums)) {
//         nums = sortNums(opNums(nums));
//         count += 1;
//     }
//     return count;
// };
//
// const minMoves = (nums) => {
//     let count = 0;
//     nums = sortNums(nums);
//     const min = nums[0];
//     for (let i = 1; i < nums.length; i++) {
//         count += nums[i] - min;
//     }
//     return count;
// };

const minMoves = (nums) => {
    let count = 0;
    let min = nums[0];
    for (let i = 0; i < nums.length; i++) {
        count += nums[i];
        min = Math.min(min, nums[i]);
    }
    return count - min * nums.length;// eslint-disable-line
};

console.log(minMoves([1, 3, 5]));
