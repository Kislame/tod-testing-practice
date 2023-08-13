function analyzeArray(arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let sum = arr.reduce((acc, val) => {
    return acc + val;
  });

  let average = sum / arr.length;

  return {
    average,
    max,
    min,
    length: arr.length,
  };
}

export default analyzeArray;
