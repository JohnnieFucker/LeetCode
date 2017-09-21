/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const invertTree = (root) => {
    if (root) {
        const tmp = root.left;
        root.left = root.right;
        root.right = tmp;
        if (root.left) {
            invertTree(root.left);
        }
        if (root.right) {
            invertTree(root.right);
        }
        return root;
    }
    return null;
};
