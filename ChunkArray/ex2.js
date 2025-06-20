/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
  let res = [];
  
  for(let i = 0; i < arr.length; i = i + size) {
    res.push(arr.slice(i, i + size));
  }

  return res;
};

const arrInp = [1,9,6,3,2];
const sizeInp = 3;

console.log(chunk(arrInp, sizeInp)); // [[1,9,6],[3,2]]
