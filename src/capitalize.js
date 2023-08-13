function capitalize(str) {
  const firstLetter = str[0];
  return `${firstLetter.toUpperCase()}${str.slice(1)}`;
}

export default capitalize;
