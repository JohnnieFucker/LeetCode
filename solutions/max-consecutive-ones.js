/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxConsecutiveOnes = (nums) => {
    let ret = 0;
    let tmpRet = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            tmpRet += 1;
        } else {
            if (ret > 0) {
                ret = Math.max(ret, tmpRet);
            } else {
                ret = tmpRet;
            }
            tmpRet = 0;
        }
    }
    if (ret > 0) {
        ret = Math.max(ret, tmpRet);
    } else {
        ret = tmpRet;
    }
    return ret;
};
