function oddishOrEvenish(number) {
  let sum = number
    .toString()
    .split("")
    .reduce((acc, n) => {
      acc += +n;
      return acc;
    }, 0);

  return sum % 2 === 0 ? "Evenish" : "Oddish";
}

console.log(oddishOrEvenish(25)); // Oddish
console.log(oddishOrEvenish(11)); // Evenish
console.log(oddishOrEvenish(58)); // Oddish
