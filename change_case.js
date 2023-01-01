// camelCase, PascalCase ,snake_case, and kebab-case.

const types = Object.freeze({
  camel: 0,
  snake: 1,
  kebab: 2,
  pascal: 3,
});

function changeCase(value, type) {
  return value
    .toLowerCase()
    .split(" ")
    .map((element, index) => {
      switch (type) {
        case 0:
          return index > 0
            ? element.replace(element[0], element[0].toUpperCase())
            : element;
        case 1:
          return index > 0 ? element.replace("", "_") : element;
        case 2:
          return index > 0 ? element.replace("", "-") : element;
        default:
          return element.replace(element[0], element[0].toUpperCase());
      }
    })
    .join("");
}

console.log(changeCase("Hello World", types.camel));
console.log(changeCase("Hello World", types.snake));
console.log(changeCase("Hello World", types.kebab));
console.log(changeCase("Hello World", types.pascal));
