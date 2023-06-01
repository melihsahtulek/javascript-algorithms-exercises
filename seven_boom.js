function sevenBoom(numbers) {
  const found = numbers.some((number) => {
    if (number === 7 || number.toString().includes(7)) {
      return true;
    }
  });

  return found ? "Boom!" : "there is no 7 in the array";
}

console.log(sevenBoom([5, 9, 199, 89, 7])); // Boom!
console.log(sevenBoom([3, 6, 1, 0, 87])); // Boom!
console.log(sevenBoom([3, 689, 21, 0, 187])); // Boom!
console.log(sevenBoom([3, 4, 5, 0, 96])); // there is no 7 in the array
