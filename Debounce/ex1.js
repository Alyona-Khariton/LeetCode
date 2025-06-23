/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function(fn, t) {
    let timerId;

    return function(...args) {
      clearTimeout(timerId);
      timerId = setTimeout(() => fn(...args), t);
    }
};

let start = Date.now();
function log(...inputs) { 
  console.log([Date.now() - start, inputs ])
}
const dlog = debounce(log, 20);
setTimeout(() => dlog(1), 50);
setTimeout(() => dlog(2), 100);
