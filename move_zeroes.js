function moveZeroes(nums) {
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    let zeroIndex = nums.indexOf(0);
    nums.splice(zeroIndex, 1);
    nums.push(0);
  }
  return nums;
}

console.log(moveZeroes([0, 1, 2, 3, 0, 0, 9]));
