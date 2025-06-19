const arr = [-2,-1,0,1,2];
const fn = function plusOne(n) {
  console.log('n+1', n+1)
  return n + 1;
}

var filter = function(arr, fn) {
  return arr.filter((val, i) => fn(val, i));
};

const newArray = filter(arr, fn); // [-2,0,1,2]
console.log(newArray);