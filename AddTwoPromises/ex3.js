/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
  const [res1, res2] = await Promise.all([promise1, promise2]);

  return res1 + res2;
};

const promise1 = new Promise(resolve => setTimeout(() => resolve(10), 50))
const promise2 = new Promise(resolve => setTimeout(() => resolve(-12), 30))

addTwoPromises(promise1, promise2)
  .then((x) => console.log(x)); // -2