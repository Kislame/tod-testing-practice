import caesarCipher from './caesarCipher';

describe('caesarCipher', () => {
  it('should return an Error if the first argument is not a string', () => {
    expect(() => caesarCipher(5, 1)).toThrow();
  });
  it('should return an Error if the second argument is above 25', () => {
    expect(() => caesarCipher('hello', 26)).toThrow();
  });

  it('should wrap from z to a ', () => {
    expect(caesarCipher('abcd', 25)).toMatch(/zabc/);
  });

  it('should keep the same case for the returned string', () => {
    expect(caesarCipher('ABCD', 1)).toMatch(/BCDE/);
    expect(caesarCipher('abcd', 1)).toMatch(/bcde/);
  });
  it('should test for punctuation', () => {
    expect(caesarCipher('abcd!!!', 1)).toMatch('bcde!!!');
  });
});
