function makeAbox(n) {
  const box = [];

  if (isNaN(n)) {
    return -1;
  }

  if (n === 0) {
    box.push([]);
  }

  for (let i = 0; i < n; i++) {
    box.push([]);
    for (let j = 0; j < n; j++) {
      if (i === 0 || i === n - 1) {
        box[i][j] = "#";
      } else {
        if (j === 0 || j === n - 1) {
          box[i][j] = "#";
        } else {
          box[i][j] = " ";
        }
      }
    }
  }

  return box;
}

console.log(makeAbox(5));
/*
[
  [ '#', '#', '#', '#', '#' ],
  [ '#', ' ', ' ', ' ', '#' ],
  [ '#', ' ', ' ', ' ', '#' ],
  [ '#', ' ', ' ', ' ', '#' ],
  [ '#', '#', '#', '#', '#' ]
]
*/

console.log(makeAbox(1));
/*
  [ [ '#' ] ]
*/

console.log(makeAbox(2));
/*
[ 
  [ '#', '#' ], 
  [ '#', '#' ] 
]
*/

console.log(makeAbox(0));
/*
 [ [] ]
*/

console.log(makeAbox("str"));
/*
 -1
*/
