/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
  if (!obj) return;

  if (Array.isArray(obj)) {
    return obj.filter(Boolean).map(item => compactObject(item));
  }
  
  if (typeof obj === 'object') {
    const res = {};

    for (let key in obj) {
      const val = compactObject(obj[key]);
      if (Boolean(val)) res[key] = val;
    }

    return res;
  }
  
  return obj;
};

const obj = [null, 0, 5, [0], [false, 16]];

console.log(compactObject(obj)); // [ 5, [], [ 16 ] ]
