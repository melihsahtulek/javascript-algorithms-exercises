function rgb(...color) {
  let hex = "";

  for (let c of color) {
    if (c > 255) {
      c = 255;
    }

    hex += c.toString(16).padStart(2, c.toString(16));
  }

  return {
    rgb: color.toString(),
    hex: "#" + hex.toUpperCase(),
  };
}

console.log(rgb(255, 255, 255));
console.log(rgb(148, 0, 211));
console.log(rgb(0, 0, 0));
console.log(rgb(255, 10, 5));
