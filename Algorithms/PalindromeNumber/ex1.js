/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) return false;

  let reverse = 0;
  let xCopy = x;

  while (x > 0) {
    reverse = (reverse * 10) + (x % 10);
    x = Math.floor(x / 10);
  }  
  
  return reverse === xCopy;
};

console.log(isPalindrome(121)); // true
console.log(isPalindrome(-121)); // false
console.log(isPalindrome(-10)); // false
console.log(isPalindrome(1551)); // true
