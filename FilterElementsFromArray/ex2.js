const arr = [1,2,3];
const fn = function firstIndex(n, i) { 
  console.log('n,i:', n,i);
  return i === 0;
}

var filter = function(arr, fn) {
  return arr.filter((val, i) => fn(val, i));
};

const newArray = filter(arr, fn); // [1]
console.log(newArray);