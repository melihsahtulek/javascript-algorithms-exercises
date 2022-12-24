function lengthOfLastWord(str) {
  let strArr = str
    .replace(/\s{1,}/g, " ")
    .trim()
    .split(" ");

  return {
    last_word: strArr[strArr.length - 1],
    length: strArr[strArr.length - 1].length,
  };
}

console.log(lengthOfLastWord("Good morning"));
console.log(lengthOfLastWord("Good night everybody"));
