"use strict";

var _calculator = _interopRequireDefault(require("./calculator"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
describe('calculator', function () {
  it('should takes two numbers and return the sum', function () {
    expect(_calculator["default"].add(1, 2)).toBe(3);
  });
  it('should takes two numbers and return the sub', function () {
    expect(_calculator["default"].sub(5, 2)).toBe(3);
  });
  it('should takes two numbers and return the mul ', function () {
    expect(_calculator["default"].mul(2, 2)).toBe(4);
  });
  it('should takes two numbers and return the div', function () {
    expect(_calculator["default"].div(6, 2)).toBe(3);
  });
});