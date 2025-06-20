/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
  const resArr = [];

  arr.forEach((val, i) => {
    resArr.push(fn(val, i));
  });

  return resArr;
};

const arr = [10,20,30];
function constant() { return 42; }
const newArray = map(arr, constant); 

console.log(newArray); // [42,42,42]
