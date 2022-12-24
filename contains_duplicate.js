function checkDuplicate(nums) {
  let found = -1;

  for (let i = 0; i < nums.length; i++) {
    if (found > 0) break;

    found = -1;
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] === nums[j]) found++;
    }
  }
  return found > 0 ? true : false;
}

console.log(checkDuplicate([0, 2, 3, 1, 4, 5, 9]));
console.log(checkDuplicate([1, 2, 3, 1]));
console.log(checkDuplicate([1, 2, 3, 4]));
console.log(checkDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
