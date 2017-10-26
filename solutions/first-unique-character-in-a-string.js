/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = (s) => {
    const tmpObj = {};
    for (let i = 0; i < s.length; i++) {
        if (tmpObj.hasOwnProperty(s[i])) {
            tmpObj[s[i]].freq += 1;
        } else {
            tmpObj[s[i]] = { index: i, freq: 1 };
        }
    }
    let index = s.length - 1;
    let find = false;
    for (const k in tmpObj) {
        if (tmpObj[k].freq === 1) {
            index = Math.min(index, tmpObj[k].index);
            find = true;
        }
    }
    if (find) {
        return index;
    }
    return -1;
};
