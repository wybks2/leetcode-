// 反转链表 2    94题 git config --global http.sslVerify false

var reverseBetween = function(head, left, right) {
  const part_head = head.slice(left-1, right).reverse();
  head.splice(left-1, right-left+1, ...part_head);
  return head;
};
console.log(reverseBetween([1,2,3,4,5],2,4))