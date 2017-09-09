/**
 * @param {string} moves
 * @return {boolean}
 */
const judgeCircle = (moves) => {
    let x = 0;
    let y = 0;
    if (moves.length === 0) {
        return false;
    }
    const l = moves.length;
    for (let i = 0; i < l; i++) {
        switch (moves[i]) {
        case 'L':
            x--;
            break;
        case 'R':
            x++;
            break;
        case 'U':
            y++;
            break;
        case 'D':
            y--;
            break;
        default:
        }
    }
    return x === 0 && y === 0;
};
