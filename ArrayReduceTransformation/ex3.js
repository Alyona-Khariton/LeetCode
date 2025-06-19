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

nums = []
const fn = function sum(accum, curr) {
  return 0;
}
init = 25

console.log(reduce(nums, fn, init)); // 25
