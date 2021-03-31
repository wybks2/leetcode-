// 判断子序列 392

// 解法是双指针，贪心算法。 每一次都是第一个
//本题询问的是，sss 是否是 ttt 的子序列，因此只要能找到任意一种 sss 在 ttt 中出现的方式，即可认为 sss 是 ttt 的子序列。

//而当我们从前往后匹配，可以发现每次贪心地匹配靠前的字符是最优决策。

//假定当前需要匹配字符 ccc，而字符 ccc 在 ttt 中的位置 x1x_1x1​ 和 x2x_2x2​ 出现（x1<x2x_1 < x_2x1​<x2​），那么贪心取 x1x_1x1​ 是最优解，因为 x2x_2x2​ 后面能取到的字符，x1x_1x1​ 也都能取到，并且通过 x1x_1x1​ 与 x2x_2x2​ 之间的可选字符，更有希望能匹配成功。

//这样，我们初始化两个指针 iii 和 jjj，分别指向 sss 和 ttt 的初始位置。每次贪心地匹配，匹配成功则 iii 和 jjj 同时右移，匹配 sss 的下一个位置，匹配失败则 jjj 右移，iii 不变，尝试用 ttt 的下一个字符匹配 sss。

//最终如果 iii 移动到 sss 的末尾，就说明 sss 是 ttt 的子序列。


var isSubsequence = function(s, t) {
  let count = 0;
  let jCount = 0; 
  if(!s.length) {
    return true
  }
  for(let i = 0; i<s.length; i++) {
    for( let j = jCount; j<t.length; j++) {
      if(s[i]==t[j]){
        count++;
        jCount = j+1;
        if(count == s.length) {
          return true
        }
        break;
      }
    }
  }
  return false;
};
console.log(isSubsequence('abc','ahbgdc'));
console.log(isSubsequence('aaaaa','ahbgdc'));

// 解法2 动态规划