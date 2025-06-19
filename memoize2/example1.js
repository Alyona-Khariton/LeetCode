/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    let callCount = 0;
    let cache = {};

    return function(...args) {
      const key=JSON.stringify(args);
      let val;

      if (key in cache) {
        val = cache[key];
      } else {
        val = fn(...args);
        callCount++;
        cache[key] = val;
      }

      return {"val": val,"calls": callCount};
    }
}


const sum = (a, b) => a + b
const inputs = [[2,2],[2,2],[1,2]];
const memoizedSum = memoize(sum);

for (const arr of inputs) {
  console.log(memoizedSum(...arr));
}
