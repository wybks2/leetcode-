/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var inorderTraversal = function(root) {
  const stack = [];
  const nodeArr = [];
  isEnd(root);
};
// 每次存储将node的左子节点截断
function isEnd(node, stack, nodeArr) {
  // 1. 判断有没有左子节点
  if(node.left) {
    // 有左子节点 该节点加入
    stack.push(node);
    // 继续递归 左子节点传入
    isEnd(node.left, stack, nodeArr);
    // 防止死循环
    // node.left = null;
  }else {
    // 1.存储该节点 以及
    nodeArr.push(node.val);
    if(node.right){
      // 存在右子节点，将右子节点压入stack
      stack.push(node.right);
      isEnd(node.right, stack, nodeArr);
    }else{
      // 不存在右子节点
      // stack为空 说明结束
      if(!stack.length) {
        return nodeArr;
      } else {
        // stack还在, top的节点推出存储， 该节点右子节点进行递归判断
        const n = stack.pop()
        nodeArr.push(n.val); 
        isEnd(n.right, stack, nodeArr) 
        // const myNode = 
      }
    }
  }
}

// function hasRight(node, savenodeArr, nodeArr) {
//   // 判断有没有右子节点
//   if(node.right){
    
//   } else {

//   }
// }