// kata: https://www.codewars.com/kata/5266876b8f4bf2da9b000362/javascript

// if else
function likes(names) {
  if (names.length == 0) {
    return "no one likes this"
  } else if (names.length == 1) {
    return `${names} likes this`
  } else if (names.length == 2) {
    return `${names[0]} and ${names[1]} like this`
  } else if (names.length == 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`
  } else if (names.length > 3) {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
  }
}

// if else #2
function likes(names) {
  if (names.length == 0) return "no one likes this"
  if (names.length == 1) return `${names} likes this`
  if (names.length == 2) return `${names[0]} and ${names[1]} like this`
  if (names.length == 3) return `${names[0]}, ${names[1]} and ${names[2]} like this`
  if (names.length > 3) return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
}

// switch case (cleaner)
function likes(names) {
  switch (names.length) {
      case 0: return "no one likes this"
      case 1: return `${names} likes this`
      case 2: return `${names[0]} and ${names[1]} like this`
      case 3: return `${names[0]}, ${names[1]} and ${names[2]} like this`
      default: return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
  }
}
