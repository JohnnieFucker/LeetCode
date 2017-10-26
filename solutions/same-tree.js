/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
const isSameTree = (p, q) => {
    let node = false;
    if (!(p || q)) {
        return true;
    }
    if (p && q && p.val === q.val) {
        node = true;
    }
    let left = false;
    let right = false;
    if (p && q) {
        left = isSameTree(p.left, q.left);
        right = isSameTree(p.right, q.right);
    }
    return left && right && node;
};
