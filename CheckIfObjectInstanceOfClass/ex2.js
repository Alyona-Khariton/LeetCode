/**
 * @param {*} obj
 * @param {*} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function(obj, classFunction) {
  while(obj != null) {
    console.log('constructor', obj.constructor);
    if (obj.constructor === classFunction) return true;
    obj = Object.getPrototypeOf(obj);
    console.log('getPrototypeOf', Object.getPrototypeOf(obj));
  }
  
  return false;
};

class Animal {};
class Dog extends Animal {};
console.log(checkIfInstanceOf(new Dog(), Animal)); // true
