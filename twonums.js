// 六大原则

var twoSum = function (nums, target) {
  const container = {};  
  const indexArr = [];
  let len = nums.length;
  for(let i = 0; i < len; i++){
    const value = target-nums[i];
    console.log(i, container[value]);
    if(container[value]){
      indexArr.push(container[value]);
      indexArr.push(i);
    } else {
      container[nums[i]] = i;
    }
  }
  return indexArr;
};

console.log(twoSum([2,7,11,15], 9));
