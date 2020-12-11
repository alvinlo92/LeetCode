/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (nums.length < 3) return nums.length;
  let i = 1;
  while (i < nums.length) {
      if (nums[i] === nums[i - 1] && nums[i] === nums[i + 1]) {
          nums.splice(i, 1);
      } else {
          i++;
      }
  }
  return nums.length;
};

/*
I: a sorted array of integers
O: length of array
C: must modify in place, no extra memory
E: empty array or array of length 2

I: [0,0,1,1,2,3,3]
O: 7, nums = [0,0,1,1,2,3,3]

// iterate through array starting at index 1
  // check if current index is the same as index - 1
      // if yes, check if index + 1 is equal as well
          // if yes, slices index + 1
          // if not, continue
// return the new array length
*/