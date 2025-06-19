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

const getInputs = () => { const o = {}; return [[o,o],[o,o],[o,o]]; }
const mergeObj = (a, b) => ({...a, ...b})
const inputs = getInputs();
console.log('inputs >> ', inputs);
const memoizedMerge = memoize(mergeObj);

for (const arr of inputs) {
  console.log(memoizedMerge(...arr));
}