/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
  if (!obj) return;

  const res = Array.isArray(obj) ? [] : {};
  if (Array.isArray(obj)) {
    return obj.filter(Boolean).map(item => compactObject(item));
  }
  
  if (typeof obj == 'object') {
    const res = {};

    for (let key in obj) {
      if (Boolean(obj[key])) res[key] = compactObject(obj[key]);
    }
  }
  
  return obj;
};

const obj = [null, 0, false, 1];

console.log(compactObject(obj)); // [1]