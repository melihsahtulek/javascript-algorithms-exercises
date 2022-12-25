function toLowerCase(str) {
  for (let i = 0; i < str.length; i++) {
    let chr = str[i];
    if (chr.charCodeAt() >= 65 && chr.charCodeAt() <= 90) {
      str = str.replace(str[i], String.fromCharCode(chr.charCodeAt() + 32));
    }
  }

  return str;
}

console.log(toLowerCase("Hello"));
console.log(toLowerCase("HeyHowAreYou?"));
