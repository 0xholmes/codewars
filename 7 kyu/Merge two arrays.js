// kata: https://www.codewars.com/kata/583af10620dda4da270000c5/javascript

const mergeArrays = (a, b) => {
  const len = Math.max(a.length, b.length)
  let result = []
  
  for (let i = 0; i < len; i++) {
    result.push(a[i], b[i])
  }
  
  return result.filter(x => x !== undefined)
}
