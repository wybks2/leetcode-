// 螺旋矩阵  二维数组[[1,2,3],
//
//                   [4,5,6],[7,8,9]]
// 方法1  按路径模拟
// 方法2  按层模拟
const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function result(sums) {
  const row = sums.length;
  const col = sums[0].length;
  const array = [];
  const layer = (col > row) ? row : col;
  for(let m = 0; m<layer ; m++){
    readNums(row, col, m, array);
  }
  console.log(array)
}

function readNums(row, col, layer, array) {
  const top = layer;
  const bottom = row - layer;
  const left = layer;
  const right = col - layer;
  for (let i = left; i < right; i++) {
    for (let j = top; j < bottom; j++) {
      array.push(arr[i][j]);
    }
  }
}

result(arr);