import reverseString from './reverseString';

describe('reverseString', () => {
  it('should return a reversed string', () => {
    expect(reverseString('hello')).toBe('olleh');
  });
});
