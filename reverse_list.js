function reverseList(nums) {
  const reversed = [];
  for (let i = nums.length - 1; i >= 0; i--) {
    reversed.push(nums[i]);
  }
  return reversed;
}

console.log(reverseList([1, 2, 3, 4, 5]));
