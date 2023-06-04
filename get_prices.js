function getPrices(list) {
  const priceList = [];

  list.forEach((item) => {
    priceList.push(parseFloat(item.match(/[0-9.]+/g)[0]));
  });

  return priceList;
}

console.log(
  getPrices([
    "water ($5.99)",
    "banana ($0.20)",
    "pizza ($8.50)",
    "soup ($1.99)",
  ])
); // [ 5.99, 0.2, 8.5, 1.99 ]

console.log(getPrices(["salad ($4.99)"])); // [ 4.99 ]
