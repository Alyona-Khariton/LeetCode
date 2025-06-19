const arr = [0,10,20,30];
const fn = function greaterThan10(n) { return n > 10; };

var filter = function(arr, fn) {
  return arr.filter((val, i) => fn(val, i));
};

const newArray = filter(arr, fn); // [20, 30]
console.log(newArray);