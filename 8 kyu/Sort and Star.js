// kata: https://www.codewars.com/kata/57cfdf34902f6ba3d300001e/javascript

// short
const twoSort = (s) => {
  return s.sort()[0].split('').join('***')
}

// long
const twoSort = (s) => {
  const sorted = s.sort()
  for (let i = 0; i < sorted.length; i++) {
    return sorted[i].split('').join('***')
  }
}
