const max = (a, b) => (a > b ? a : b);
/**
* @param {number[]} nums
* @return {number}
*/
const rob = (nums) => {
    let amoutOdd = 0;
    let amoutEven = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i % 2 === 0) {
            amoutOdd = max(amoutOdd + nums[i], amoutEven);
        } else {
            amoutEven = max(amoutOdd, amoutEven + nums[i]);
        }
    }
    return max(amoutOdd, amoutEven);
};
