function arrayDiff(...arrays) {
  let result = [];
  let [firstArray, secondArray] = arrays;

  if (!(firstArray.length > secondArray.length)) {
    let copyArray = [...secondArray];
    secondArray = [...firstArray];
    firstArray = copyArray;
  }

  for (let i = 0; i < firstArray.length; i++) {
    if (!(secondArray.indexOf(firstArray[i]) > -1)) {
      result.push(firstArray[i]);
    }
  }
  return result;
}

console.log(arrayDiff([1, 2], [1])); // [2]
console.log(arrayDiff([1, 2, 2, 2, 3], [2])); // [1,3]
console.log(arrayDiff([1, 2], [])); // [1,2]
console.log(arrayDiff([1, 2], [1, 2, 3, 4, 5])); // [3,4,5]
