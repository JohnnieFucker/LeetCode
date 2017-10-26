/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = (nums) => {
    const numsObject = {};
    nums.forEach((n) => {
        if (numsObject.hasOwnProperty(n)) {
            numsObject[n] += 1;
        } else {
            numsObject[n] = 1;
        }
    });
    for (const k in numsObject) {
        if (numsObject.hasOwnProperty(k)) {
            if (numsObject[k] > nums.length / 2) {
                return parseInt(k, 10);
            }
        }
    }
    return null;
};
