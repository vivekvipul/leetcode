/*
1st approach
Accepted, runtime - 37%, memorey - 48%
*/

var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }
  if (x === 0) return true;
  let arr = [];
  while (x > 0) {
    arr.push(Math.floor(x % 10));
    x = Math.floor(x / 10);
  }
  for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
    if (arr[i] !== arr[j]) {
      return false;
    }
  }
  return true;
};

/**
    2nd approach
    Accepted, runtime - 99%, memorey - 89%
 */
var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }
  if (x === 0) return true;
  let y = 0,
    temp = x;
  while (x > 0) {
    y = y * 10 + Math.floor(x % 10);
    x = Math.floor(x / 10);
  }
  if (temp === y) return true;
  return false;
};
