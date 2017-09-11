// /**
//  * @param {string[]} words
//  * @return {string[]}
//  */
// const findWords = (words) => {
//     const rowOne = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
//     const rowTwo = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
//     const rowThree = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
//     const result = [];
//     words.forEach((word) => {
//         const w = word.toLowerCase().split('');
//         if (!([...new Set(w.concat(rowOne))].length > rowOne.length && [...new Set(w.concat(rowTwo))].length > rowTwo.length && [...new Set(w.concat(rowThree))].length > rowThree.length)) {
//             result.push(word);
//         }
//     });
//     return result;
// };

const findWords = (words) => {
    const keyRows = [['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'], ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'], ['z', 'x', 'c', 'v', 'b', 'n', 'm']];
    const result = [];
    words.forEach((word) => {
        const w = word.toLowerCase().split('');
        let x = -1;
        w.every((c) => {
            if (x === -1) {
                keyRows.every((r, idx) => {
                    if (r.indexOf(c) >= 0) {
                        x = idx;
                        return false;
                    }
                    return true;
                });
                return true;
            } else if (keyRows[x].indexOf(c) < 0) {
                x = -1;
                return false;
            }
            return true;
        });
        if (x >= 0) {
            result.push(word);
        }
    });
    return result;
};


console.log(findWords(['Hello', 'Alaska', 'Dad', 'Peace']));
