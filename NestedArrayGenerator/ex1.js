/**
 * @param {Array} arr
 * @return {Generator}
 */
var inorderTraversal = function*(arr) {
    for(let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        yield* inorderTraversal(arr[i]);
      } else {
        yield arr[i];
      }
    }    
};

const gen = inorderTraversal([[[6]],[1,3],[]]);
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
console.log(gen.next().done); // true
