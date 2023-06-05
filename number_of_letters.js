function letterCount(txt) {
  const result = [];

  const cleanTxt = txt.match(/[a-zA-Z]/gi);

  let i = 0;
  new Set(cleanTxt).forEach((elem) => {
    result.push({
      letter: elem,
      count: 0,
    });
    for (let j = 0; j < cleanTxt.length; j++) {
      if (result[i].letter === cleanTxt[j]) {
        result[i].count += 1;
      }
    }
    i += 1;
  });

  return result;
}

console.log(letterCount("aa bb c ddd e"));
/*
[
  { letter: 'a', count: 2 },
  { letter: 'b', count: 2 },
  { letter: 'c', count: 1 },
  { letter: 'd', count: 3 },
  { letter: 'e', count: 1 }
]
*/
