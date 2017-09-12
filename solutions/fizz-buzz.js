/**
 * @param {number} n
 * @return {string[]}
 */
const fizzBuzz = (n) => {
    const ret = [];
    if (n <= 0) {
        return ret;
    }
    for (let i = 1; i <= n; i++) {
        let s = i.toString();
        if (i % 3 === 0 || i % 5 === 0) {
            s = '';
            if (i % 3 === 0) {
                s += 'Fizz';
            }
            if (i % 5 === 0) {
                s += 'Buzz';
            }
        }
        ret.push(s);
    }
    return ret;
};

console.log(fizzBuzz(20));
