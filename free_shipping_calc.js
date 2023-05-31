function freeShipping(cart) {
  const shippingCost = 20;
  const cartTotal = Object.values(cart).reduce((acc, value) => {
    acc += value;
    return acc;
  }, 0);

  return cartTotal < shippingCost ? "No Free Shipping!" : "Free Shipping!";
}

console.log(freeShipping({ "White Shampoo": 5.99, "Math Book": 15.99 })); // Free Shipping!
console.log(freeShipping({ "Blue Pencil": 5.99, "Ice Cream": 5.99 })); // No Free Shipping!
