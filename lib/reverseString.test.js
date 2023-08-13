"use strict";

var _reverseString = _interopRequireDefault(require("./reverseString"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
describe('reverseString', function () {
  it('should return a reversed string', function () {
    expect((0, _reverseString["default"])('hello')).toBe('olleh');
  });
});