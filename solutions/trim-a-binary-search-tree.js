/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {TreeNode}
 */
const trimBST = (root, L, R) => {
    if (root) {
        if (root.val >= L && root.val <= R) {
            root.left = trimBST(root.left, L, R);
            root.right = trimBST(root.right, L, R);
            return root;
        }
        if (root.val < L) {
            root = root.right;
            return trimBST(root, L, R);
        }
        if (root.val > R) {
            root = root.left;
            return trimBST(root, L, R);
        }
    }
    return null;
};
