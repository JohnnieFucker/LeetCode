function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
const mergeTrees = (t1, t2) => {
    if (!(t1 || t2)) {
        return null;
    }

    const node = new TreeNode(((t1 || 0).val || 0) + ((t2 || 0).val || 0));
    node.left = mergeTrees(t1 && t1.left, t2 && t2.left);
    node.right = mergeTrees(t1 && t1.right, t2 && t2.right);
    return node;
};
