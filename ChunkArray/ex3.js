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

const arrInp = [8,5,3,2,6];
const sizeInp = 6;

console.log(chunk(arrInp, sizeInp)); // [[8,5,3,2,6]]
