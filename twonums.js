// 六大原则
// {}的内存消耗 比 map更大  删除对象 会让映射查找更快
var twoSum = function (nums, target) {
  const container = {};  
  const indexArr = [];
  let len = nums.length;
  for(let i = 0; i < len; i++){
    const value = target-nums[i];
    if(container[value]===0 || container[value]){
      indexArr.push(container[value]);
      indexArr.push(i);
    } else {
      container[nums[i]] = i;
    }
  }
  return indexArr;
};

console.log(twoSum([2,7,11,15], 9));

var twoSum1 = function (nums, target) {
  const container = new Map();  
  const indexArr = [];
  let len = nums.length;
  for(let i = 0; i < len; i++){
    const value = target-nums[i];
    console.log(i, container);
    if(container.has(value)){
      indexArr.push(container.get(value));
      indexArr.push(i);
      container.delete(value);
    } else {
      container.set(nums[i], i);
    }
  }
  return indexArr;
};

console.log(twoSum1([2,7,11,15], 9));