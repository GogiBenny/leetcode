// Given two integers, num and t. A number is achievable if it can become equal to num after applying the following operation:
// Increase or decrease the number by 1, and simultaneously increase or decrease num by 1.
// Return the maximum achievable number after applying the operation at most t times.
// Constraints: 1 <= num, t <= 50
function theMaximumAchievableX(num, t) {
  return console.log(num + (2 * t));
}

theMaximumAchievableX(4, 1); // 6
theMaximumAchievableX(3, 2); // 7
