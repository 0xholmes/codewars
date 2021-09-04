// kata: https://www.codewars.com/kata/5bb904724c47249b10000131/javascript

// 1st
function points(games) {
  let points = 0
  
  for (let i = 0; i < games.length; i++) { 
    const x = games[i].split(":")[0]
    const y = games[i].split(":")[1]
    
    if (x > y) {
      points += 3
    } else if (x < y) {
      points += 0
    } else {
      points++
    }
  }
  
  return points
}

// 2nd
const points = (games) => {
  let points = 0
  
  for (let i = 0; i < games.length; i++) { 
    const x = games[i].split(":")[0]
    const y = games[i].split(":")[1]
    
    x > y ? points += 3 : x < y ? points += 0 : points++
  }
  
  return points
}

// 3rd
const points = (games) => {
  let points = 0
  
  for (let i = 0; i < games.length; i++) { 
    const x = games[i][0]
    const y = games[i][2]
    
    x > y ? points += 3 : x < y ? points += 0 : points++
  }
  
  return points
}
