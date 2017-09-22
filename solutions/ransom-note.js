// /**
//  * @param {string} ransomNote
//  * @param {string} magazine
//  * @return {boolean}
//  */
// const canConstruct = (ransomNote, magazine) => {
//     magazine = magazine.split('');
//     for (let i = 0; i < ransomNote.length; i++) {
//         const index = magazine.indexOf(ransomNote[i]);
//         if (index < 0) {
//             return false;
//         }
//         magazine.splice(index, 1);
//     }
//     return true;
// };
const canConstruct = (ransomNote, magazine) => {
    const dic = {};
    for (let i = 0; i < magazine.length; i++) {
        if (dic.hasOwnProperty(magazine[i])) {
            dic[magazine[i]] += 1;
        } else {
            dic[magazine[i]] = 1;
        }
    }
    for (let i = 0; i < ransomNote.length; i++) {
        if (dic.hasOwnProperty(ransomNote[i])) {
            if (dic[ransomNote[i]] === 0) {
                return false;
            }
            dic[ransomNote[i]] -= 1;
        } else {
            return false;
        }
    }
    return true;
};

console.log(canConstruct('aa', 'aab'));
