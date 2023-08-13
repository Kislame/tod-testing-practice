function caesarCipher(str, shift) {
  if (typeof str !== 'string') {
    throw new Error('Invalid input');
  }

  if (shift > 25) {
    throw new Error('the shift factor must be less or equal 25');
  }

  let key = 65;

  if (str.toLocaleLowerCase() === str) {
    key = 97;
  }

  const reg = /\p{P}/gu;

  const alph = new Array(26)
    .fill(1)
    .map((_, i) => String.fromCharCode(key + i));

  const newStr = str
    .split('')
    .map((c) => {
      if (c.match(reg)) {
        return c;
      } else {
        let index = alph.indexOf(c);

        let newIndex = index + shift;

        if (newIndex > 25) {
          newIndex -= 26;
        }

        let newCh = alph[newIndex];
        return newCh;
      }
    })
    .join('');

  return newStr;
}

export default caesarCipher;
