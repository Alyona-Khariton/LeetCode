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
  {"id":"1"},
  {"id":"1"},
  {"id":"2"}
], 
fn = function (item) { 
  return item.id; 
}

console.log(arr.groupBy(fn));
