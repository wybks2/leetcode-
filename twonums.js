// 六大原则

const container = new Map();
var twoSum = function (nums, target) {
  const indexArr = [];
  let len = nums.length;
  for(let i = 0; i < len; i++){
    const value = target-nums[i];
    if(container.has(value)){
      indexArr.push(container.get(value));
      indexArr.push(i);
      container.delete(value);
    } else {
      container.set(nums[i], i);
    }
    console.log(container)
  }
  return indexArr;
};

console.log(twoSum([3,3], 6));
