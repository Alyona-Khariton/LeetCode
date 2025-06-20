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

const obj1 = new ArrayWrapper([23,98,42,70]);
console.log(String(obj1)); // "[23,98,42,70]"
