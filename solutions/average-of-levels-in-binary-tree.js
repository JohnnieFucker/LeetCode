/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const averageOfLevels = (root) => {
    const ret = [];
    const averageOfLevel = (root, level) => {
        if (!ret[level]) {
            ret[level] = {
                v: 0,
                c: 0
            };
        }
        ret[level].v += root.val;
        ret[level].c++;
        level++;
        if (root.left) {
            averageOfLevel(root.left, level);
        }
        if (root.right) {
            averageOfLevel(root.right, level);
        }
    };
    averageOfLevel(root, 0);
    const retFinal = [];
    ret.forEach((r) => {
        retFinal.push(r.v / r.c);
    });
    return retFinal;
};
