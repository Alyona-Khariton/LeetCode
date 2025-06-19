/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {

  return functions.reduceRight((acc, cur) => {
    return function(x) {
      return cur(acc(x));
    };    
  });   
    
};

const fn = compose([x => x + 1, x => x * x, x => 2 * x]);
console.log(fn(4)); // 65
