// You are given a string s. The score of a string is defined as the sum of the absolute difference between the ASCII values of adjacent characters.
// Return the score of s.

function scoreOfString(s) {
  let score = 0;
  for (let i = 0; i < s.length - 1; i++) {
    score += Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1)); 
  }
  return console.log(score);
}

scoreOfString("zaz"); // 50
scoreOfString("hello"); // 13
scoreOfString("leetcode"); // 63
