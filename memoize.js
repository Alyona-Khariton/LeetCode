/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    let cache = {};

    return function(...args) {
      const key=JSON.stringify(args);

      if (key in cache) {
          // console.log('From cache: ', cache[key]);
          return cache[key];
      } else {
        const res = fn(...args);
        cache[key] = res;
        // console.log('Calc res: ', res);
        return res;     
      }
    }
}


let callCount = 0;
const sum = (a, b) => {
  callCount += 1;
  return a + b;
}

const memoizedFn = memoize(sum)

console.log(memoizedFn(2,2))
console.log(memoizedFn(2,2))
console.log('getCallCount >>', callCount)
console.log(memoizedFn(1,2))
console.log('getCallCount >>', callCount)

