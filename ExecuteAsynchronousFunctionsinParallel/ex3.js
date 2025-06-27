/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
  return new Promise((resolve, reject) => {
    if (!functions.length) return resolve([]);

    let resolvedCount = 0;
    let res = new Array(functions.length).fill(null);

    for(let i = 0; i < functions.length; i++) {
      functions[i]()
        .then(result => {
          res[i] = result;
          resolvedCount++;

          if (functions.length === resolvedCount) return resolve(res);
        })
        .catch(e => reject(e));
    }
    
  });
};

const functions = [
  () => new Promise(resolve => setTimeout(() => resolve(4), 50)), 
  () => new Promise(resolve => setTimeout(() => resolve(10), 150)), 
  () => new Promise(resolve => setTimeout(() => resolve(16), 100))
];

promiseAll(functions).then(console.log); // [4, 10, 16]
