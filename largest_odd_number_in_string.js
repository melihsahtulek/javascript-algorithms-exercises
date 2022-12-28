function largestOddNumber(strNum) {
  if (+strNum % 2 !== 0) {
    return +strNum;
  } else {
    let max = 0;
    for (let i = 0; i < strNum.length; i++) {
      if (+strNum[i] % 2 !== 0) {
        if (+strNum[i] > max) {
          max = +strNum[i];
        }
      }
    }
    return max > 0 ? max : "";
  }
}

console.log(largestOddNumber("52"));
console.log(largestOddNumber("4206"));
console.log(largestOddNumber("35427"));
