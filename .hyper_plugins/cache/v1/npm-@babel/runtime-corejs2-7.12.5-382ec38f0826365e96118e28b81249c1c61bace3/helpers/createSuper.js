var _Reflect$construct = require("@babel/runtime-corejs2/core-js/reflect/construct");

var getPrototypeOf = require("./getPrototypeOf");

var isNativeReflectConstruct = require("./isNativeReflectConstruct");

var possibleConstructorReturn = require("./possibleConstructorReturn");

function _createSuper(Derived) {
  var hasNativeReflectConstruct = isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = getPrototypeOf(this).constructor;
      result = _Reflect$construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return possibleConstructorReturn(this, result);
  };
}

module.exports = _createSuper;