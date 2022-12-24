function bSearch(nums = [], target) {
  let startIndex = 0;
  let finishIndex = nums.length - 1;
  let flag = parseInt((startIndex + finishIndex) / 2);
  let index = -1;

  while (true) {
    if (nums[flag] === target) {
      index = flag;
      break;
    }

    if (target < nums[flag]) {
      // sola git
      if (flag === startIndex) {
        break;
      } else {
        finishIndex = flag;
        flag = Math.floor((startIndex + finishIndex) / 2);
      }
    }

    if (target > nums[flag]) {
      // sağa git
      if (flag === finishIndex) {
        break;
      } else {
        startIndex = flag;
        flag = Math.ceil((startIndex + finishIndex) / 2);
      }
    }
  }

  return { nums, index };
}

// Sorted list
console.log(bSearch([5, 10, 15, 20], 5));
console.log(bSearch([-20, -10, -5, 15, 20], -30));
console.log(bSearch([-20, -10, -5, 15, 20], 15));
