import capitalize from './capitalize';

describe('capitalize', () => {
  it('should return the string with the first letter being capitalized', () => {
    expect(capitalize('hello')).toEqual('Hello');
  });
});
