function towSum(nums = [], target = null) {
  let result;
  if (nums.length >= 2 && target !== null) {
    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] + nums[i + 1] === target) {
        result = [i, i + 1];
        break;
      } else {
        result = "no result!";
      }
    }
  } else {
    return new Error("invalid params.").message;
  }

  return result;
}

console.log(towSum([2, 7, 11, 15], 9));
console.log(towSum([3, 2, 4], 6));
console.log(towSum([3, 3], 6));
console.log(towSum([3, 4, 5, 10], 9));
console.log(towSum([1, 2, 3], 10));
console.log(towSum([1], 10));
