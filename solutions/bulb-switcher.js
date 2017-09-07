/**
 * @param {number} n
 * @return {number}
 */
let bulbArr;

function initBulb(n) {
    bulbArr = [];
    for (let i = 0; i < n; i++) {
        bulbArr.push(true);
    }
}

function countLightingBulb() {
    let count = 0;
    bulbArr.forEach((b) => {
        if (b) {
            count++;
        }
    });
    return count;
}

function turnOffEvery2ndBulb(n) {
    for (let i = 0; i < n; i++) {
        if (i % 2 === 1) {
            bulbArr[i] = false;
        }
    }
}

function toggleEvery3rdBulb(n) {
    for (let i = 0; i < n; i++) {
        if (i % 3 === 2) {
            bulbArr[i] = !bulbArr[i];
        }
    }
}

function toggleLastBulb() {
    bulbArr[bulbArr.length - 1] = false;
}

const bulbSwitch = (n) => {
    if (n === 0) {
        return 0;
    }
    initBulb(n);
    for (let j = 0; j < n; j++) {
        if (j > 0) {
            if (j === n - 1) {
                toggleLastBulb();
            } else if (j % 2 === 1) {
                turnOffEvery2ndBulb(n);
            } else {
                toggleEvery3rdBulb(n);
            }
        }
    }
    return countLightingBulb();
};

/**
 * 最优解
 * @param {number} n
 * @return {number}
 */
const bulbSwitchBest = n => Math.floor(Math.sqrt(n));
