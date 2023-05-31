function evenOddPartition(numbers) {
  const even = [];
  const odd = [];

  numbers.forEach((n) => {
    if (n % 2 === 0) {
      even.push(n);
    } else {
      odd.push(n);
    }
  });

  return [even, odd];
}

console.log(evenOddPartition([1, 0, 5, 7, 9, 7, 2])); // [ [ 0, 2 ], [ 1, 5, 7, 9, 7 ] ]
console.log(evenOddPartition([1, 3, 5, 7, 9])); // [ [], [ 1, 3, 5, 7, 9 ] ]
