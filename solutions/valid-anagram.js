/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
    if (s.length !== t.length) {
        return false;
    }
    const map = {};
    for (let i = 0; i < s.length; i++) {
        if (map.hasOwnProperty(s[i])) {
            map[s[i]] += 1;
        } else {
            map[s[i]] = 1;
        }
        if (map.hasOwnProperty(t[i])) {
            map[t[i]] -= 1;
        } else {
            map[t[i]] = -1;
        }
    }
    let ret = true;
    for (const k in map) {
        if (map.hasOwnProperty(k) && map[k] !== 0) {
            ret = false;
            return ret;
        }
    }
    return ret;
};
