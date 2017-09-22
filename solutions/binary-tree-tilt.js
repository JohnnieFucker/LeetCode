/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const findTilt = (root) => {
    let ret = 0;
    function recursion(node) {
        if (node) {
            const left = recursion(node.left);
            const right = recursion(node.right);
            ret += Math.abs(left - right);
            return node.val + left + right; // eslint-disable-line
        }
        return 0;
    }
    recursion(root);
    return ret;
};
