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
const convertBST = (root) => {
    let sum = 0;
    function plusTree(node) {
        if (node) {
            plusTree(node.right);
            const c = node.val;
            node.val += sum;
            sum += c;
            plusTree(node.left);
        }
    }
    plusTree(root);
    return root;
};
