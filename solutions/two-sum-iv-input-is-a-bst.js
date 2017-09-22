/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
const findTarget = (root, k) => {
    const arr = [];
    let ret = false;
    function find(node) {
        if (node) {
            if (arr.indexOf(k - node.val) >= 0) {
                ret = true;
                return ret;
            }
            arr.push(node.val);
            find(node.left);
            find(node.right);
        }
    }
    find(root);
    return ret;
};
