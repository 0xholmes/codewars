function sumTwoSmallestNumbers(numbers) {  
  const [firstNum, secondNum] = numbers.sort((a, b) => a - b)
  return firstNum + secondNum
}

// Ascending
// numbers.sort((a, b) => a - b)

// Descending
// numbers.sort((a, b) => a + b)
