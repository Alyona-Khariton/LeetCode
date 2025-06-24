/**
 * @param {Object} context
 * @param {Array} args
 * @return {null|boolean|number|string|Array|Object}
 */
Function.prototype.callPolyfill = function(context, ...args) {
  const fn = this.bind(context);
  return fn(...args);    
}

const fn = function add(b) {
  return this.a + b;
}

console.log(fn.callPolyfill({"a": 5}, 7)); // 12