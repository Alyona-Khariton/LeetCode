/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
  if (functions.length === 0) {
    return function(x) {
      return x;
    }
  };

  return functions.reduceRight((acc, cur) => {
    return function(x) {
      return cur(acc(x));
    };    
  });   
    
};

const fn = compose([]);
console.log(fn(42)); // 42
