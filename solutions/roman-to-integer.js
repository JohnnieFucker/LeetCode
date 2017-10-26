/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = (s) => {
    const map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    let ret = map[s[0]];
    const l = s.length;
    for (let i = 1; i < l; i++) {
        if (map[s[i]] > map[s[i - 1]]) {
            ret += (map[s[i]] - 2 * map[s[i - 1]]);
        } else {
            ret += map[s[i]];
        }
    }
    return ret;
};