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
function plusI(n, i) { return n + i; }
const newArray = map(arr, plusI); 

console.log(newArray); // [1,3,5]
