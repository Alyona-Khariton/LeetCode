class TimeLimitedCache {
  constructor() {
    this.map = new Map();
  }
  /**
   * @param {number} key
   * @param {number} value
   * @param {number} duration time until expiration in ms
   * @return {boolean} if un-expired key already existed
   */
  set(key, value, duration) {
    const isExist = this.map.has(key);
    if (isExist) clearTimeout(this.map.get(key).timerId);

    this.map.set(key, {
      value,
      timerId: setTimeout(() => {
        this.map.delete(key);
      }, duration),
    });

    return isExist;
  }
  /**
   * @param {number} key
   * @return {number} value associated with key
   */
  get(key) {
    return this.map.has(key) ? this.map.get(key).value : -1;
  }
  /**
   * @return {number} count of non-expired keys
   */
  count() {
    return this.map.size;
  }
}




const timeLimitedCache = new TimeLimitedCache();

console.log(timeLimitedCache.set(1, 42, 50)); // false
console.log(timeLimitedCache.set(1, 50, 100)); // true
console.log(timeLimitedCache.get(1)) // 50
console.log(timeLimitedCache.get(1)) // 50
console.log(timeLimitedCache.get(1)) // -1
console.log(timeLimitedCache.count()) // 0
