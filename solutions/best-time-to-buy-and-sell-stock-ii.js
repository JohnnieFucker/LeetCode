/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
    let ret = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            ret += prices[i] - prices[i - 1];
        }
    }
    return ret;
};
