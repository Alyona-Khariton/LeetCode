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
  () => new Promise(resolve => setTimeout(() => resolve(5), 200))
];

promiseAll(functions).then(console.log); // [5]
