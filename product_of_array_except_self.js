function productExceptSelf(nums = []) {
  let total = 1;
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (j !== i) {
        total *= nums[j];
      }
    }
    total = total === 0 ? Math.abs(total) : total;
    result.push(total);
    total = 1;
  }

  return result;
}

console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([-1, 1, 0, -3, 3]));
console.log(productExceptSelf([1, 3, -5]));
