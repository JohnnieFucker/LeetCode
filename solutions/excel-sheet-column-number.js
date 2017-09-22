/**
 * @param {string} s
 * @return {number}
 */
const titleToNumber = (s) => {
    let ret = 0;
    function letterToNumbser(l) {
        return 1 + (l.charCodeAt(0) - 'A'.charCodeAt(0));
    }
    for (let i = 0; i < s.length; i++) {
        ret += letterToNumbser(s[i]) * Math.pow(26 ,(s.length-i-1));// eslint-disable-line
    }
    return ret;
};

console.log(titleToNumber('B'));
console.log(titleToNumber('A'));
console.log(titleToNumber('ABC'));
console.log(titleToNumber('BB'));
