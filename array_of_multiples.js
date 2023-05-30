function arrayOfMultiples(num, length) {
  let resultArr = [];
  for (let i = 1; i <= length; i++) {
    resultArr.push(num * i);
  }

  return resultArr;
}

console.log(arrayOfMultiples(7, 5)); // [ 7, 14, 21, 28, 35 ]
console.log(arrayOfMultiples(5, 3)); // [ 5, 10, 15 ]
