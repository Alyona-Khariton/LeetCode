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

const fn = compose([x => 10 * x, x => 10 * x, x => 10 * x]);
console.log(fn(1)); // 1000
