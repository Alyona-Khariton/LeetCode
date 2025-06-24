/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
    
  
    return async function(...args) {
      return new Promise(async (resolve, reject) => {
        const timerId = setTimeout(() => {
          reject("Time Limit Exceeded");
        }, t);

        try {
          const res = await fn(...args);
          resolve(res);
        } catch (e) {
          reject(e);
        }
        finally {
          clearTimeout(timerId);
        }
      });
    }
};

const fn = async () => { 
  throw "Error";
}

const inputs = []
const limited = timeLimit(fn, 1000)
const start = performance.now()
let result;
try {
   const res = await limited(...inputs)
   result = {"resolved": res, "time": Math.floor(performance.now() - start)};
} catch (err) {
   result = {"rejected": err, "time": Math.floor(performance.now() - start)};
}
console.log(result) // Output
