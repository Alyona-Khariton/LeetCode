/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function() {
  const len = this.length;
  return len === 0 ? -1 : this[len - 1];
};

const arr = [];
console.log(arr.last()); // -1
 