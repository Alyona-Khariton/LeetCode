/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const res = [];

  for(let i = 0; i < nums.length; i++) {
    for(let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) res.push(i, j);
    };
  };

  return res;    
};

const nums = [3,3], target = 6;
console.log(twoSum(nums, target)); // [0,1]
