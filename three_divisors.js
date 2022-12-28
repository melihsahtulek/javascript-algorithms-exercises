function checkThreeDivisors(num) {
  let count = 0;
  for (let i = 0; i < num; i++) {
    if ((num / (i + 1)) % 1 === 0) {
      count++;
    }
  }

  return count >= 3 ? true : false;
}

console.log(checkThreeDivisors(4));
console.log(checkThreeDivisors(2));
console.log(checkThreeDivisors(6));
console.log(checkThreeDivisors(0));
