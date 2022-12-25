function firstUniqChar(str) {
  let uniqIndex = -1;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str.length; j++) {
      if (str[i] === str[j]) {
        uniqIndex++;
      }
    }

    if (uniqIndex === 0) {
      uniqIndex = i;
      break;
    } else {
      uniqIndex = -1;
    }
  }

  return uniqIndex;
}

console.log(firstUniqChar("ilovejavascript"));
console.log(firstUniqChar("ubuntulinuxubuntu"));
