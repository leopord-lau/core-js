var lengthOfArrayLike = require('../internals/length-of-array-like');

// https://tc39.es/proposal-change-array-by-copy/#sec-array.prototype.withReversed
// https://tc39.es/proposal-change-array-by-copy/#sec-%typedarray%.prototype.withReversed
module.exports = function (O, C) {
  var len = lengthOfArrayLike(O);
  var A = new C(len);
  var k = 0;
  for (; k < len; k++) A[k] = O[len - k - 1];
  return A;
};
