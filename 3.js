function myFunction(min, max) {
  const result = [];
  for (let i = min; i <= max; i++) {
      let k = true;
      
      for (let j = 2; j <= Math.sqrt(i); j++) {
          if (i % j === 0) {
              k = false;
              break
          }
      }
      
      if (k) {
          result.push(i)
      }
  }
  
  return result;
}