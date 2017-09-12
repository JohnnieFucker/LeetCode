/**
 * @param {string} s
 * @return {string}
 */
const reverseString = (s) => {
    let ret = '';
    if (s && s.length > 0) {
        const l = s.length - 1;
        for (let i = l; i >= 0; i--) {
            ret += s[i];
        }
    }
    return ret;
};
