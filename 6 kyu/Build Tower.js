// kata: https://www.codewars.com/kata/576757b1df89ecf5bd00073b/javascript

function towerBuilder(nFloors) {
  const tower = []
  for (let i = 1; i < nFloors + 1; i++) {
    const space = ' '.repeat(nFloors - i)
    const star = '*'.repeat(i * 2 - 1)
    tower.push(`${space}${star}${space}`)
  }
  return tower
}
