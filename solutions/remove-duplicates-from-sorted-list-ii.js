/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = (head) => {
    if (head === null || head.next === null) {
        return head;
    }
    const res = new ListNode(0);
    res.next = head;
    let current = head;
    let pre = res;
    while (current != null) {
        while (current.next !== null && current.val === current.next.val) {
            current = current.next;
        }
        if (pre.next === current) {
            pre = pre.next;
        } else {
            pre.next = current.next;
        }
        current = current.next;
    }
    return res.next;
};
