/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
  let curCounter = init;
  const increment = () => {
    return ++curCounter;
  }
  
  const reset = () => {
    curCounter = init;
    return curCounter;
  }

  const decrement = () => {
    return --curCounter;
  }

  return {
    increment,
    reset,
    decrement,
  };
};

const counter = createCounter(0);
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
console.log(counter.reset()); // 0
console.log(counter.reset()); // 0
