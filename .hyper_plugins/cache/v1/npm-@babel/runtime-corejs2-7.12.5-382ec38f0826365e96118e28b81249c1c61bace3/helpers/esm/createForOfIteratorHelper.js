import _getIterator from "@babel/runtime-corejs2/core-js/get-iterator";
import _Array$isArray from "@babel/runtime-corejs2/core-js/array/is-array";
import _Symbol$iterator from "@babel/runtime-corejs2/core-js/symbol/iterator";
import _Symbol from "@babel/runtime-corejs2/core-js/symbol";
import unsupportedIterableToArray from "@babel/runtime-corejs2/helpers/esm/unsupportedIterableToArray";
export default function _createForOfIteratorHelper(o, allowArrayLike) {
  var it;

  if (typeof _Symbol === "undefined" || o[_Symbol$iterator] == null) {
    if (_Array$isArray(o) || (it = unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function F() {};

      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function s() {
      it = _getIterator(o);
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it["return"] != null) it["return"]();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}