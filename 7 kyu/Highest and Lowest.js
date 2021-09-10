// kata: https://www.codewars.com/kata/554b4ac871d6813a03000035/javascript

const highAndLow = (numbers) => {
  const num = numbers.split(" ").map(item => parseInt(item)).sort((a, b) => a > b ? 1 : -1)
  return `${num[num.length - 1]} ${num[0]}`
}

const highAndLow = (numbers) => {
  numbers = numbers.split(' ');
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}
