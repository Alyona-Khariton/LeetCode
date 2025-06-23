/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
  let res = {};

  this.forEach((val, i) => {
    const key = fn(val);

    if (res[key]) {
      res[key].push(this[i]);
    } else {
      res[key] = [];
      res[key].push(this[i])
    }
  });

  return res;
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const fn = function (n) { 
  return String(n > 5);
}

console.log(arr.groupBy(fn));