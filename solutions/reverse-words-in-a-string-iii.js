/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = (s) => {
    if (s && s.length > 0) {
        let ret = '';
        s.split(' ').forEach((w) => {
            const l = w.length - 1;
            for (let i = l; i >= 0; i--) {
                ret += w[i];
            }
            ret += ' ';
        });
        ret = ret.substr(0, ret.length - 1);
        return ret;
    }
    return '';
};

console.log(reverseWords("Let's take LeetCode contest"));
