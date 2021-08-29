// Solution 1
const hex = (int) => `${int < 16 ? "0" : ""}${int.toString(16)}`
const colorOf = (r, g, b) => `#${hex(r)}${hex(g)}${hex(b)}`


// Solution 2
function colorOf(r,g,b){
  return "#" + hex(r) + hex(g) + hex(b)
  
  function hex(n) {
    const result = n.toString(16)
    return result.length < 2 ? "0" + result : result
  }
}
