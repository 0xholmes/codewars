// kata: https://www.codewars.com/kata/57a1fd2ce298a731b20006a4/javascript

// 1st
const isPalindrome = (str) => {
  const lowerCaseStr = str.toLowerCase()
  const reversed = lowerCaseStr.split("").reverse().join("")
  return lowerCaseStr == reversed ? true : false
}

// 2nd
const isPalindrome = (str) => {
  const lowerCaseStr = str.toLowerCase()
  const reversed = lowerCaseStr.split("").reverse().join("")
  return lowerCaseStr == reversed
}
