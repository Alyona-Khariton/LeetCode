/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
  function toBe(otherVal) {
    if (val === otherVal) return true;
    throw new Error("Not Equal");
  }

  function notToBe(otherVal) {
    if (val !== otherVal) return true;
    throw new Error("Equal");
  }

  return {
    toBe,
    notToBe,
  };    
};

console.log(expect(5).notToBe(null)); // true
console.log(expect(5).toBe(null)); // throws "Not Equal"
