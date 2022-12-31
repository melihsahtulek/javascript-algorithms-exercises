function encrypt(str) {
  str = str.replace(/\s{2,}/gi, " ").trim();
  let n = 4;
  const result = {
    str: str,
    encrypted: "",
  };
  if (str.length > 15) return "max length must be 15 letters.";
  for (let i = 0; i < str.length; i++) {
    result.encrypted += String.fromCharCode(str.charCodeAt(i) + n);
  }

  return result;
}

console.log(encrypt("       Hello my  fr         s"));
console.log(encrypt("xyz"));
