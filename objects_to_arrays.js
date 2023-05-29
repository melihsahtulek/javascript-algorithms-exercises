function toArray(obj) {
  const str = JSON.stringify(obj);
  const strArr = str.replace(/{|}/gi, "").match(/[a-zA-Z0-9_]+/gi) || [];
  const arr = [];
  let key = 0;

  strArr.forEach((element, index) => {
    if (index % 2 === 0) {
      arr.push([element]);
    } else {
      arr[key] = [...arr[key], element];
      key += 1;
    }
  });

  return arr;
}

console.log(toArray({ a: 1, b: 2 }));
console.log(toArray({ color_a: "red", colorb: "green" }));
console.log(toArray({}));
