// long solution
function calculator(a, b, sign) {
  if (typeof a === "number" && typeof b === "number") {
    if (sign === "+" || sign === "-" || sign === "*" || sign === "/") {
      return eval(`${a} ${sign} ${b}`)
    } else {
      return "unknown value"
    }
  } else {
    return "unknown value"
  }
}

// short solution
function calculator(a, b, sign) {
  try {
    return eval(`${a} ${sign} ${b}`)
  } catch {
    return "unknown value"
  }
}
