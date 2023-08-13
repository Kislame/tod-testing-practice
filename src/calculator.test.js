import calculator from './calculator';

describe('calculator', () => {
  it('should takes two numbers and return the sum', () => {
    expect(calculator.add(1, 2)).toBe(3);
  });
  it('should takes two numbers and return the sub', () => {
    expect(calculator.sub(5, 2)).toBe(3);
  });
  it('should takes two numbers and return the mul ', () => {
    expect(calculator.mul(2, 2)).toBe(4);
  });
  it('should takes two numbers and return the div', () => {
    expect(calculator.div(6, 2)).toBe(3);
  });
});
