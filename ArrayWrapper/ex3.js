/**
 * @param {number[]} nums
 * @return {void}
 */
var ArrayWrapper = function(nums) {
  this.nums = nums;
};

/**
 * @return {number}
 */
ArrayWrapper.prototype.valueOf = function() {
  return this.nums.reduce((acc, cur) => {
    acc = acc+ cur;
    return acc;
  }, 0);
}

/**
 * @return {string}
 */
ArrayWrapper.prototype.toString = function() {
  return JSON.stringify(this.nums);
}

const obj1 = new ArrayWrapper([]);
const obj2 = new ArrayWrapper([]);
console.log(obj1 + obj2); // 0
