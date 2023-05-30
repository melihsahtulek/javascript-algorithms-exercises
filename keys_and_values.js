function keysAndValues(obj) {
  const keys = [];
  const values = [];
  const str = JSON.stringify(obj);
  const strArr = str.replace(/{|}/gi, "").match(/[a-zA-Z0-9_]+/gi) || [];

  strArr.forEach((element, index) => {
    if (index % 2 === 0) {
      keys.push(element);
    } else {
      values.push(element);
    }
  });

  return [keys, values];
}

console.log(
  keysAndValues({
    a: 1,
    b: 2,
    c: 3,
    key1: true,
    key2: false,
    key3: "undefined",
  })
);

/*
[
  [ 'a', 'b', 'c', 'key1', 'key2', 'key3' ],
  [ '1', '2', '3', 'true', 'false', 'undefined' ]
]
*/
