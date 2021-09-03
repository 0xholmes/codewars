// kata: https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/javascript

// 1st
function abbrevName(name){
  const regex = /\b(\w)/g
  const matches = name.match(regex)
  const acronym = matches.join('.').toUpperCase()
  return acronym
}

// 2nd
function abbrevName(name){
  const words = name.split(" ")
  const fl = (words[0][0] + "." + words[1][0]).toUpperCase()
  return fl
}

// 3rd
function abbrevName(name){
  const regex = /\b\w/g
  return name.match(regex).join(".").toUpperCase()
}
