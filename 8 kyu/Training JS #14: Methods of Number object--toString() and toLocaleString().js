const hex = (int) => `${int < 16 ? "0" : ""}${int.toString(16)}`

const colorOf = (r, g, b) => `#${hex(r)}${hex(g)}${hex(b)}`
