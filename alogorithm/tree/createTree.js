function createTree() {}

// ===> 简易的二叉搜索树  节点已存在情况无法改变
// ===> 优化二叉搜索树 可以任意插入节点
// 初始化节点
function Node(data, left, right) {
  this.data = data;
  this.right = right;
  this.left = left;
}
// 插入节点
function insert(data) {
  // 1. 创建节点
  const n = new Node(data, null, null);
  // 2.如果该树的root为空，则该节点就是根节点root 非空则进行插入节点操作，判断左右节点
  if (!this.root) {
    this.root = n;
  } else {
    // 2.如何确定父节点
    let current = this.root;
    let parent;
    while (current) {
      console.log(current, data);
      parent = current;
      //如果父节点大于新节点
      if (parent.data > data) {
        //&& left不存在   left存在则 current为parent left 继续循环
        // if (parent.left) {
        //   current = parent.left;
        // } else {
        //   current.left = n;
        //   current = null;
        //   //break;
        // }

        // 优化写法
        if (parent.left && parent.left.data < data) {
          const oldNode = parent.left;
          parent.left = n;
          parent.left.left = oldNode;
          break;
        }
        current = parent.left;
        parent.left || (parent.left = n);
        // 如果父节点小于新节点
      } else {
        // if (parent.right) {
        //   console.log('继续')
        //   current = parent.right;
        // } else {
        //   console.log(data,'结束')
        //   current.right = n;
        //   current = null;
        //   //break;
        // }
        // 右子节点存在 且大于当前节点
        if (parent.right && parent.right.data > data) {
          // 存储原来右子节点
          const oldNode = parent.right;
          // 新节点绑定
          parent.right = n;
          // 旧子节点绑定
          parent.right.right = oldNode;
          break;
        }
        current = parent.right;
        parent.right || (parent.right = n);
      }
    }
  }
}
// 定义二叉搜索树对象
function BST() {
  this.root = null;
  this.insert = insert;
  this.show = () => {
    console.log(this.root);
  };
}

const bst = new BST();
bst.insert(1);
bst.insert(2);
bst.insert(-1);
bst.insert(4);
bst.insert(3);
bst.insert(1.5);
bst.insert(0);
bst.show();
