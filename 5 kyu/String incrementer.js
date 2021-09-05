// kata: https://www.codewars.com/kata/54a91a4883a7de5d7800009c/javascript

function incrementString (str) {
  return str.replace(/\d*$/, match => {
    if (!match) return '1'
    const numStr = String(parseInt(match) + 1)
    const diff = match.length - numStr.length
    return diff > 0
      ? '0'.repeat(diff) + numStr
      : numStr
  })
}
