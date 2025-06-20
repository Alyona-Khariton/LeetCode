/**
 * @return {Generator<number>}
 */
var fibGenerator = function*() {
  let prev1 = 0;
  let prev2 = 1;

  while(true) {
    yield prev1;
    const sum = prev1 + prev2;
    prev1 = prev2;
    prev2 = sum;
  }    
};

const gen = fibGenerator();
console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3