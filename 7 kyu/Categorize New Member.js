// kata: https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/javascript

// forEach
const openOrSenior = (data) => {
  let result = []
  data.forEach(d => {
    if (d[0] >= 55 && d[1] > 7) {
      result.push('Senior')
    } else {
      result.push('Open')
    }
  })
  return result
}

// map
const openOrSenior = (data) => {
  return data.map(d => {
    if (d[0] >= 55 && d[1] > 7) {
      return 'Senior'
    } else {
      return 'Open'
    }
  })
}

// destructuring: [age, handicap] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
const openOrSenior = (data) => {
  return data.map(([age, handicap]) => (age >= 55 && handicap > 7) ? "Senior" : "Open")
}

// one line destructuring
const openOrSenior = (data) => data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open')
