/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
  const acc = 0;
  return nums.reduce((acc, cur) => {
    return fn(acc, cur);
  }, init);
};

nums = [1,2,3,4]
const fn = function sum(accum, curr) { return accum + curr; }
init = 0

console.log(reduce(nums, fn, init)); // 10
