var _Symbol$hasInstance = require("@babel/runtime-corejs2/core-js/symbol/has-instance");

var _Symbol = require("@babel/runtime-corejs2/core-js/symbol");

function _instanceof(left, right) {
  if (right != null && typeof _Symbol !== "undefined" && right[_Symbol$hasInstance]) {
    return !!right[_Symbol$hasInstance](left);
  } else {
    return left instanceof right;
  }
}

module.exports = _instanceof;