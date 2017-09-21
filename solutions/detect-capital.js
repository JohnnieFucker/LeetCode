/**
 * @param {string} word
 * @return {boolean}
 */
const detectCapitalUse = (word) => {
    const l = word.length;
    let firstCap = false;
    const reg = new RegExp(/[A-Z]/);
    let isCap = false;
    let capLenth = 0;
    for (let i = 0; i < l; i++) {
        isCap = reg.test(word[i]);
        if (isCap) {
            capLenth++;
        }
        if (i === 0) {
            firstCap = isCap;
        }
        if (capLenth === 1) {
            if (!firstCap) {
                return false;
            }
        }
        if (capLenth > 1) {
            if (i > 0 && capLenth < i + 1) {
                return false;
            }
        }
    }
    return true;
};
console.log(detectCapitalUse('usa'));
console.log(detectCapitalUse('USA'));
console.log(detectCapitalUse('Usa'));
console.log(detectCapitalUse('UsA'));
console.log(detectCapitalUse('USa'));
console.log(detectCapitalUse('uSa'));
