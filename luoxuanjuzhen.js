// 螺旋矩阵  二维数组[[1,2,3],
//
//                   [4,5,6],[7,8,9]]
// 方法1  按路径模拟  已走过的方向变成'none' 或者判断
// 方法2  按层模拟
// 方法3  变换矩阵  行首后 翻转 再取行首


// 第一个方法 笨方法
const arr = [[1,2,3,4,5,6,7,8,9,10],
             [11,12,13,14,15,16,17,18,19,20]]
var spiralOrder1 = function(matrix) {
  const row = matrix.length - 1;
  const col = matrix[0].length - 1;
  const array = [];
  const layer = col > row ? Math.floor(row/2) : Math.floor(col/2);
  for (let m = 0; m <= layer; m++) {
    readNums(row, col, m, array, matrix);
  }
  console.log(array)
  return array
}

function readNums(row, col, layer, array, matrix) {
  const top = layer;
  const bottom = row - layer;
  const left = layer;
  const right = col - layer;
  // 左到右
  if (left == right && top == bottom) {
    array.push(matrix[left][top]);
    console.log(1);
    return;
  } else if (top == bottom) {
    console.log(2);
    for (let start = left; start <= right; start++) {
      array.push(matrix[top][start]);
    }
    return;
  } else if (left == right) {
    console.log(3);
    for (let start = top; start <= bottom; start++) {
      array.push(matrix[start][right]);
    }
    return;
  }

  for (let start = left; start < right; start++) {
    array.push(matrix[top][start]);
  }
  for (let start = top; start < bottom; start++) {
    array.push(matrix[start][right]);
  }
  for (let start = right; start > left; start--) {
    array.push(matrix[bottom][start]);
  }
  for (let start = bottom; start > top; start--) {
    array.push(matrix[start][left]);
  }
}

spiralOrder(arr);
