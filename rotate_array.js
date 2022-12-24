// 1. WAY FOR SOLUTION:
function rotate(nums, step) {
  let arr = [];
  for (let i = 0; i < step; i++) {
    arr = [...arr, nums.pop()];
  }
  return [...arr.reverse(), ...nums];
}

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
