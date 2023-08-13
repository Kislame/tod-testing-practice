"use strict";

var _caesarCipher = _interopRequireDefault(require("./caesarCipher"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
describe('caesarCipher', function () {
  it('should return an Error if the first argument is not a string', function () {
    expect(function () {
      return (0, _caesarCipher["default"])(5, 1);
    }).toThrow();
  });
  it('should return an Error if the second argument is above 25', function () {
    expect(function () {
      return (0, _caesarCipher["default"])('hello', 26);
    }).toThrow();
  });
  it('should wrap from z to a ', function () {
    expect((0, _caesarCipher["default"])('abcd', 25)).toMatch(/zabc/);
  });
  it('should keep the same case for the returned string', function () {
    expect((0, _caesarCipher["default"])('ABCD', 1)).toMatch(/BCDE/);
    expect((0, _caesarCipher["default"])('abcd', 1)).toMatch(/bcde/);
  });
  it('should test for punctuation', function () {
    expect((0, _caesarCipher["default"])('abcd!!!', 1)).toMatch('bcde!!!');
  });
});