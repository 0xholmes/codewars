function arrayDiff(a, b) {
  return a.filter(a => !b.includes(a))
}
