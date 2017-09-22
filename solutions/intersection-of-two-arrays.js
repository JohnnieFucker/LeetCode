/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = function (nums1, nums2) {
    const s = new Set(nums1);
    const s2 = new Set(nums2);
    const ret = [];
    for (const k of s) {
        if (s2.has(k)) {
            ret.push(k);
        }
    }
    return ret;
};

console.log(intersection([1, 2, 2, 3], [2, 3]));
