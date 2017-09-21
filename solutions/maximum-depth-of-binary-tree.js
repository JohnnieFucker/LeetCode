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
const maxDepth = (root) => {
    if (root) {
        return Math.max(1 + maxDepth(root.left), 1 + maxDepth(root.right));
    }
    return 0;
};

console.log(maxDepth(null));
