// 给定一个循环数组（最后一个元素的下一个元素是数组的第一个元素），输出每个元素的下一个更大元素。数字 x 的下一个更大的元素是按数组遍历顺序，这个数字之后的第一个比它更大的数，这意味着你应该循环地搜索它的下一个更大的数。如果不存在，则输出 -1。
// 解法1 硬解 数组相加
// const progress = require('progress');
// const argv = progress.argv.slice(2,progress.argv.length);
// console.log(argv,'argv')

function result(nums) {
  const shownums = [...nums, ...nums];
  const trueLen = nums.length;
  const container = [];
  for(let i=0; i<trueLen ;i ++){
    console.log(i)
    for(let j=i+1; j<shownums.length; j++){
      console.log(j)
      if(shownums[j]>nums[i]){
        container.push(shownums[j]);
        break;
      }else if(j==shownums.length-1){
        container.push(-1)
      }
    }
  } 
  return container;
}

console.log(result([1,2,1]));

// function addnums(nums) {
//   return [...nums,...nums]
// }
