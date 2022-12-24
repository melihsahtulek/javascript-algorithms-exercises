function twoSum(nums, target) {
  nums = nums.sort((a, b) => a - b);
  let result = {};
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        result = {
          target,
          indexes: [i, j],
          sorted_list: nums,
        };
      }
    }
  }

  return result;
}

const result = twoSum([0, 8, 4, 9, 3], 4);

for (const key in result) {
  console.log(`${key} ...: ${result[key]}`);
}
