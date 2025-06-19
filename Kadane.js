function maxSubArraySum(arr) {
  let maxSoFar = -Infinity;
  let maxEndingHere = 0;

  for (let i = 0; i < arr.length; i++) {
    maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }

  return maxSoFar;
}

// Пример использования
const numbers = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const maxSum = maxSubArraySum(numbers);
console.log("Максимальная сумма подмассива:", maxSum); // Вывод: 6
