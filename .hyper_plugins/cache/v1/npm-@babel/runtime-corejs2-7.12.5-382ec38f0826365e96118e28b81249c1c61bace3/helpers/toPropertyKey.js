var _typeof = require("@babel/runtime-corejs2/helpers/typeof");

var toPrimitive = require("./toPrimitive");

function _toPropertyKey(arg) {
  var key = toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}

module.exports = _toPropertyKey;