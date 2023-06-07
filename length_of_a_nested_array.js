function getLength(arr) {
  function nestedArray(nestedArr) {
    return [].concat(...nestedArr);
  }

  arr.forEach((elem) => {
    let control = true;
    while (Array.isArray(elem)) {
      arr = [...nestedArray(arr)];

      arr.forEach((item) => {
        if (Array.isArray(item)) {
          control = true;
        } else {
          control = false;
        }
      });

      if (!control) {
        break;
      }
    }
  });

  return { array: arr, length: arr.length };
}

console.log(getLength([1, [2, [3, [4, [5, 6]]]]])); // { array: [ 1, 2, 3, 4, 5, 6 ], length: 6 }
console.log(getLength([1, [2], 1, [2], 1])); // { array: [ 1, 2, 1, 2, 1 ], length: 5 }
console.log(getLength([1, [2, 3]])); // { array: [ 1, 2, 3 ], length: 3 }
