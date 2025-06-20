/**
 @param {Function} fn
 @param {Array} args
 @param {number} t
 @return {Function}
*/
var cancellable = function(fn, args, t) {
  const timeoutId = setTimeout(() => fn(...args), t);

  return function() {
    return clearTimeout(timeoutId);
  }
};

const result = [];

const fn = (x1, x2) => x1 * x2;
const args = [2, 4], t = 30, cancelTimeMs = 100;

const start = performance.now();

const log = (...argsArr) => {
  const diff = Math.floor(performance.now() - start);
  result.push({"time": diff, "returned": fn(...argsArr)});
}
      
const cancel = cancellable(log, args, t);

const maxT = Math.max(t, cancelTimeMs);
          
setTimeout(cancel, cancelTimeMs);

setTimeout(() => {
  console.log(result);
}, maxT + 15)
