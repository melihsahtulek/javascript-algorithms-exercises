function filterList(list) {
  let result = [];
  for (let i = 0; i < list.length; i++) {
    if (list[i] / 1 === list[i]) {
      result.push(list[i]);
    }
  }
  return result;
}

console.log(filterList([1, 2, "a", "ab", "xyz", 3, 4, "5", "6", 7]));
console.log(filterList([1, 2, "a", "b"])); // [1,2]
console.log(filterList([1, "a", "b", 0, 15])); // [1,0,15]
console.log(filterList([1, 2, "abcde", "01", "1235", 1235])); // [1,2,123]
