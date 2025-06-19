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

      console.log('key', key);

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

const mergeObj = (a, b) => ({...a, ...b})
const inputsObj = [[{},{}],[{},{}],[{},{}]];
const memoizedMerge = memoize(mergeObj);

for (const arr of inputsObj) {
  console.log(memoizedMerge(...arr));
}