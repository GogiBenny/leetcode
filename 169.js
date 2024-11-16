// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times. 
// You may assume that the majority element always exists in the array.

function majorityElement(nums) {
  let res;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      res = nums[i];
    }
    count += res === nums[i] ? 1 : -1;
  }
  return console.log(res);
}

majorityElement([3,2,3]); // 3
majorityElement([2,2,1,1,1,2,2]); // 2
