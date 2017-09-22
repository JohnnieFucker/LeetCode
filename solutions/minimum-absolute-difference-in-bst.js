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
const getMinimumDifference = (root) => {
    let min = 0;
    let pre = -1;
    function minDif(node) {
        if (node) {
            if (node.left) {
                minDif(node.left);
            }
            if (pre !== -1) {
                min = min > 0 ? Math.min(min, Math.abs(node.val - pre)) : Math.abs(node.val - pre);
            }
            pre = node.val;
            if (node.right) {
                minDif(node.right);
            }
        }
    }
    minDif(root, pre);
    return min;
};
