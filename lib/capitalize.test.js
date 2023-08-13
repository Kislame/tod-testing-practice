"use strict";

var _capitalize = _interopRequireDefault(require("./capitalize"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
describe('capitalize', function () {
  it('should return the string with the first letter being capitalized', function () {
    expect((0, _capitalize["default"])('hello')).toEqual('Hello');
  });
});