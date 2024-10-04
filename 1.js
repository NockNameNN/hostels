function myFunction(num) {
  const lastDigit = num % 10;
  const lastTwoDigits = num % 100;

  if (lastDigit === 1 && lastTwoDigits !== 11) {
      return `${num} компьютер`;
  } else if (lastDigit >= 2 && lastDigit <= 4 && (lastTwoDigits < 12 || lastTwoDigits > 14)) {
      return `${num} компьютера`;
  } else {
      return `${num} компьютеров`;
  }
}