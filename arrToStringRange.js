function fn(arr) {
  arr.sort((a, b) => a - b);
  let res = [];
  let indxStart = null; 
  
  for(let i = 0; i < arr.length; i++) {
    const dif = arr[i + 1] - arr[i];

    if ( dif === 1) {
      indxStart = indxStart ?? i;
    } else {
      if (indxStart === null) res.push(arr[i].toString());
      else {
        res.push(`${arr[indxStart]}-${arr[i]}`);
        indxStart = null;
      }
    }
  }
  
  return res.join(',');
}

const input = [0, 1, 2, 5, 8, 9, 12, 7];

console.log(fn(input));
