/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
  let res = {};

  this.forEach((val, i) => {
    const key = fn(val);
    console.log(key);
    if (res[key]) {
      res[key].push(this[i]);
    } else {
      res[key] = [];
      res[key].push(this[i])
    }
  });

  return res;
};

const arr = [
  [1, 2, 3],
  [1, 3, 5],
  [1, 5, 9]
]

const fn = function (list) { 
  return String(list[0]); 
}

console.log(arr.groupBy(fn));
