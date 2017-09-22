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
const sumOfLeftLeaves = function (root) {
    let ret = 0;
    function recursion(node, isLeft) {
        if (node) {
            if (isLeft && !node.left && !node.right) {
                ret += node.val;
            }
            recursion(node.left, true);
            recursion(node.right, false);
        }
    }
    recursion(root, false);
    return ret;
};
