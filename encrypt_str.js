function encrypt(str) {
  str = str.replace(/\s{2,}/gi, " ").trim();

  if (!/^[a-zA-Z0-9._\s]+$/gi.test(str)) return "Please remove speacial chars.";

  let n = 4;
  let count = 0;
  const result = {
    str: str,
    encrypted: "",
  };

  for (let i = 0; i < str.length; i++) {
    let chr = str.charCodeAt(i);
    chr = chr + n;

    if (chr >= 65 && chr <= 90) {
      if (chr > 90) {
        chr = 65 + count + n;
      }
    } else if (chr >= 97 && chr <= 122) {
      if (chr > 122) {
        chr = 97 + count + n;
      }
    } else if (chr >= 48 && chr <= 57) {
      if (chr > 57) {
        chr = 48 + count + n;
      }
    }

    count++;
    result.encrypted += String.fromCharCode(chr);
  }

  return result;
}

console.log(encrypt("MelihsahTulek"));
