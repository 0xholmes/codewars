// kata: https://www.codewars.com/kata/577c349edf78c178a1000108/javascript

// 1st
function xMasTree(n){
  let tree = []
  
  for (let i = 1; i < n + 1; i++) {
    let underscore = "_".repeat(n - i)
    let hashtag = "#".repeat(2 * i - 1)
    tree.push(`${underscore}${hashtag}${underscore}`)
  }
  
  for (let i = 1; i < 3; i++) {
    let underscore = "_".repeat(n - 1)
    let hashtag = "#"
    tree.push(`${underscore}${hashtag}${underscore}`)
  }
  
  return tree
}

// 2nd
function xMasTree(n){
  let tree = []
  
  for (let i = 1; i < n + 1; i++) {
    let underscore = "_".repeat(n - i)
    let hashtag = "#".repeat(2 * i - 1)
    tree.push(`${underscore}${hashtag}${underscore}`)
  }
  
  let underscore = "_".repeat(n - 1)
  let hashtag = "#"
  tree.push(`${underscore}${hashtag}${underscore}`)
  tree.push(`${underscore}${hashtag}${underscore}`)
  
  return tree
}
