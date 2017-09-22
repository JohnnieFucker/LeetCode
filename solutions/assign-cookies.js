/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
const findContentChildren = (g, s) => {
    g.sort((a, b) => (a - b));
    s.sort((a, b) => (a - b));
    let ret = 0;
    let index = 0;
    g.forEach((g1) => {
        while (index < s.length) {
            if (g1 <= s[index]) {
                ret += 1;
                index++;
                break;
            }
            index++;
        }
    });
    return ret;
};

console.log(findContentChildren([1, 2, 3], [3]));
