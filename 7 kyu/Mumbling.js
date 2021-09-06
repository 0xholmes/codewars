// kata: https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/javascript

// Map
const accum = (s) => {
  return [...s].map((char, idx) => (char.toUpperCase() + char.toLowerCase().repeat(idx))).join("-")
}

// one line map
const accum = (s) => [...s].map((char, idx) => (char.toUpperCase() + char.toLowerCase().repeat(idx))).join("-")
