/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
  const combinedArray = arr1.concat(arr2);
  const merged = {};

  combinedArray.forEach((obj) => {
    const id = obj.id;
    if (!merged[id]) {
      merged[id] = { ...obj };
    } else {
      merged[id] = { ...merged[id], ...obj };
    }
  });

  return Object.values(merged)
};

arr1 = [
    {"id": 1, "b": {"b": 94},"v": [4, 3], "y": 48}
]
arr2 = [
    {"id": 1, "b": {"c": 84}, "v": [1, 3]}
]

console.log(join(arr1, arr2));
