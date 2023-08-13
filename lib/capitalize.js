"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function capitalize(str) {
  var firstLetter = str[0];
  return "".concat(firstLetter.toUpperCase()).concat(str.slice(1));
}
var _default = capitalize;
exports["default"] = _default;