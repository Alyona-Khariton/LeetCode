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

const arr = [1,2,3];
function plusone(n) { return n + 1; };
const newArray = map(arr, plusone); 

console.log(newArray); // [2,3,4]
