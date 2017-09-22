/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t
 * @return {string}
 */
const tree2str = (t) => {
    let ret = '';
    if (t) {
        ret += t.val;
        if (t.left || t.right) {
            ret += '(';
            ret += tree2str(t.left);
            ret += ')';
        }
        if (t.right) {
            ret += `(${tree2str(t.right)})`;
        }
    }
    return ret;
};
