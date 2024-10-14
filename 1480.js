// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
// Return the running sum of nums.

function runningSum(nums) {
  let sums = new Array(nums.length);
  sums[0] = nums[0];
  for(let i = 1; i < nums.length; i++) {
    sums[i] = nums[i] + sums[i -1];
  }
  return console.log(sums);
}

runningSum([1,2,3,4]); // Expected: [1, 3, 6, 10]
runningSum([2,4,6,8]); // Expected: [2, 6, 12, 20]
runningSum([5,10,11,23]); // Expected: [5, 15, 26, 49]
