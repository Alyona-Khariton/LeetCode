/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
  const res = arr1.concat(arr2);
  const joinRes = {};

  res.forEach(item => {
    const dbl = res.findIndex((value) => value.id === item.id);
    if (dbl >= 0) res[dbl] = {...res[dbl], ...item};
    else res.push(item);
  });
  
  return res.sort((a, b) => a.id - b.id);
};

arr1 = [
    {"id": 1, "x": 1},
    {"id": 2, "x": 9}
], 
arr2 = [
    {"id": 3, "x": 5}
]

console.log(join(arr1, arr2));