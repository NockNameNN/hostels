function myFunction(array) {
  const min = Math.min(...array);
  const result = [];
  
  for (let i = 2; i <= min; i++) { 
      if (array.every(number => number % i === 0)) {
          result.push(i);
      }
  }
  
  return result;
}
