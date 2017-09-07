/**
* Definition for singly-linked list.
* function ListNode(val) {
*     this.val = val;
*     this.next = null;
* }
*/

/**
* @param {ListNode} headA
* @param {ListNode} headB
* @return {ListNode}
*/
const getIntersectionNode = (headA, headB) => {
    if (headA === null || headB === null) {
        return null;
    }
    let lengthA = 0;
    let lengthB = 0;
    let iA = headA;
    let iB = headB;
    while (iA !== null) {
        iA = iA.next;
        lengthA++;
    }
    while (iB !== null) {
        iB = iB.next;
        lengthB++;
    }

    while (lengthA > lengthB) {
        headA = headA.next;
        lengthA--;
    }
    while (lengthB > lengthA) {
        headB = headB.next;
        lengthB--;
    }
    while (headA !== headB) {
        headA = headA.next;
        headB = headB.next;
    }
    return headA;
};
